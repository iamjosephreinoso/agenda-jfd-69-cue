import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from "../../services/firebase.service";
import { ExcelService } from "../../services/excel.service";
import Swal from 'sweetalert2';
import {Toast} from "bootstrap";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    miFormulario: FormGroup;
    padronDocentes: any[] = [];
    cursos: string[] = [
        'Generación de Contenido Educativo con IA',
        'Herramientas de Gamificación con IA',
        'Realidad Aumentada con IA',
        'Ciencia de Datos con IA'
    ];

    public cuposPorGrupo: { [key: string]: number } = {};
    cuposActuales: number = 0;
    maxCupos = 90;
    cargandoCupos: boolean = false;

    constructor(
        private fb: FormBuilder,
        private fs: FirebaseService,
        private excelService: ExcelService
    ) {
        this.miFormulario = this.fb.group({
            cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
            nombres: ['', Validators.required],
            correo: ['', [Validators.required, Validators.email]],
            curso: ['', Validators.required]
        });
    }

    ngOnInit() {
        // 1. Cargar el padrón desde el Excel en Assets
        this.excelService.readExcelFile('assets/data/Grupos_66.xlsx')
            .then(data => {
                this.padronDocentes = data;
            })
            .catch(err => console.error('Error al cargar Excel:', err));

        this.cargarCuposTotales();

        this.miFormulario.get('cedula')?.valueChanges.subscribe(valor => {
            if (!valor || valor.length < 10) {
                this.miFormulario.patchValue({ nombres: '', correo: '' }, { emitEvent: false });
            }
        });

        // 3. Escuchar cambios en el Curso para validar cupos en Firebase
        this.miFormulario.get('curso')?.valueChanges.subscribe(curso => {
            if (curso) {
                this.verificarCuposEnFirebase(curso);
            }
        });
    }
    cargarCuposTotales() {
        this.cursos.forEach(curso => {
            // Asumiendo que tu servicio tiene una función para contar por curso
            this.fs.getGroupCount(curso, 'Grupo 1').subscribe(count => {
                this.cuposPorGrupo[curso] = count;
            });
        });
    }

    buscarDocenteManualmente() {
        const cedula = this.miFormulario.get('cedula')?.value;
        // Buscamos en el array del Excel (padronDocentes)
        const docente = this.padronDocentes.find(d =>
            String(d.CEDULA).padStart(10, '0') === cedula
        );
        if (docente) {
            this.miFormulario.patchValue({
                nombres: docente.NOMBRE ? docente.NOMBRE.toUpperCase() : '',
                correo: docente.CORREO ? docente.CORREO.toLowerCase() : ''
            });
        }
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });

        if (docente) {
            Toast.fire({ icon: 'success', title: 'Docente Encontrado' });
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Docente No Encontrado. Por favor, ingrese sus datos manualmente.',
            });
        }
    }

    verificarCuposEnFirebase(nombreCurso: string) {
        this.cargandoCupos = true;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        this.fs.getGroupCount(nombreCurso, 'Grupo 1').subscribe(count => {
            this.cuposActuales = count;
            this.cargandoCupos = false;

            if (this.cuposActuales >= this.maxCupos) {
                // Cambiado a Toast.fire
                Toast.fire({
                    icon: 'error',
                    text: `El taller "${nombreCurso}" ya no tiene cupos disponibles.`,
                    background: '#fff',
                    iconColor: '#d33'
                });
                this.miFormulario.get('curso')?.setValue('');
            }
        });
    }

    async enviarFormulario() {
        if (this.miFormulario.invalid) {
            this.mostrarAdvertencia('Complete todos los campos correctamente.');
            return;
        }

        const { cedula, curso } = this.miFormulario.value;

        try {
            const existe = await this.fs.checkUserInscription(cedula, curso);

            if (existe) {
                // Usando Toast para duplicados
                this.lanzarToast('warning', 'YA INSCRITO', 'Usted ya está registrado en este taller.');
                return;
            }

            if (this.cuposActuales >= this.maxCupos) {
                this.mostrarAlertaCuposAgotados();
                return;
            }

            const datosFinales = {
                ...this.miFormulario.value,
                nombres: this.miFormulario.value.nombres.toUpperCase(),
                grupo: 'Grupo 1',
                fechaInscripcion: new Date()
            };

            await this.fs.createUser(datosFinales);
            this.mostrarExito();
            this.miFormulario.reset();
            this.cuposActuales = 0;

        } catch (err: any) {
            this.mostrarError(err.message);
        }
    }

// Helper genérico para los Toast
    private lanzarToast(icon: any, title: string, text: string = '') {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        Toast.fire({
            icon: icon,
            title: title,
            text: text,
            iconColor: icon === 'success' ? '#5f932c' : (icon === 'warning' ? '#ffcc00' : '#d33')
        });
    }

    private mostrarExito() {
        this.lanzarToast('success', '¡INSCRIPCIÓN EXITOSA!', 'Su registro se procesó correctamente.');
    }

    private mostrarAlertaCuposAgotados() {
        this.lanzarToast('error', 'SIN CUPOS', 'No existen cupos disponibles en el taller.');
    }

    private mostrarError(msg: string) {
        this.lanzarToast('error', 'ERROR', msg);
    }

    private mostrarAdvertencia(msg: string) {
        this.lanzarToast('warning', 'ATENCIÓN', msg);
    }

    toUpperCase(controlName: string, event: any) {
        const value = event.target.value.toUpperCase();
        this.miFormulario.get(controlName)?.setValue(value, { emitEvent: false });
    }
}