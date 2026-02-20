import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FirebaseService} from "../../services/firebase.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  miFormulario: FormGroup;
  usuarios: any[] = [];
  cursos: string[] = ['Generación de Contenido Educativo con IA',
    'Herramientas de Gamificación con IA en la Enseñanza',
    'Realidad Aumentada con IA',
    'Metaversos para la Educación'];

  gruposPorCurso: { [key: string]: string[] } = {
    'Generación de Contenido Educativo con IA': ['Grupo 1', 'Grupo 2', 'Grupo 3'],
    'Herramientas de Gamificación con IA en la Enseñanza': ['Grupo 1', 'Grupo 2', 'Grupo 3'],
    'Realidad Aumentada con IA': ['Grupo 1', 'Grupo 2', 'Grupo 3'],
    'Metaversos para la Educación': ['Grupo 1', 'Grupo 2']
  };

  gruposDisponibles: string[] = [];
  cuposPorGrupo: { [key: string]: number } = {}; // cupos usados por grupo
  maxCuposPorGrupo = 35;

  constructor(private fb: FormBuilder, private fs: FirebaseService) {
    this.miFormulario = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      curso: ['', Validators.required],
      grupo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fs.getUsers().subscribe(data => this.usuarios = data);

    this.miFormulario.get('curso')?.valueChanges.subscribe(curso => {
      this.gruposDisponibles = this.gruposPorCurso[curso] || [];
      this.miFormulario.patchValue({ grupo: '' });
    });
  }

  enviarFormulario() {
    if (this.miFormulario.valid) {
      this.fs.createUser(this.miFormulario.value)
          .then(() => {
            Swal.fire({
              title: `<span style="font-size:20px; color: #0b1011;">Inscripción Correcta</span>`,
              icon: 'success',
              confirmButtonText: 'Cerrar',
              confirmButtonColor: '#003366'
            });
            this.miFormulario.reset();
          })
          .catch(err => {
            Swal.fire({
              title: `<span style="font-size:20px; color: #0b1011;">${err.message}</span>`,
              icon: 'error',
              confirmButtonText: 'Cerrar',
              confirmButtonColor: '#003366'
            });
          });
    } else {
      Swal.fire({
        title: `<span style="font-size:20px; color: #0b1011;">Completar todos los campos</span>`,
        icon: 'warning',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#003366'
      });
    }
  }

  toUpperCase(controlName: string, event: any) {
    const value = event.target.value.toUpperCase();
    this.miFormulario.get(controlName)?.setValue(value, { emitEvent: false });
  }

  onCursoChange(event: any) {
    const cursoSeleccionado = event.target.value;
    this.gruposDisponibles = this.gruposPorCurso[cursoSeleccionado] || [];
    this.miFormulario.patchValue({ grupo: '' });

    // Resetear cupos
    this.cuposPorGrupo = {};

    // Consultar cupos de cada grupo
    this.gruposDisponibles.forEach(grupo => {
      this.fs.getGroupCount(cursoSeleccionado, grupo).subscribe(count => {
        this.cuposPorGrupo[grupo] = count;
      });
    });
  }


}
