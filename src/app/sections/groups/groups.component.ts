import {Component, OnInit} from '@angular/core';
import {ExcelService} from '../../services/excel.service';
import Swal from 'sweetalert2';
import {FirebaseService} from "../../services/firebase.service";
import {first} from 'rxjs/operators';


@Component({
    selector: 'app-landing',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    gruposOriginal: any[] = [];
    gruposFiltrados: any[] = [];
    filtroGrupo: string = '';
    pageSize: number = 12;
    currentPage: number = 1;

    constructor(private excelService: ExcelService, private firebaseService: FirebaseService) {}

    ngOnInit(): void {
        Promise.all([
            this.excelService.readExcelFile('/assets/data/Grupos_66.xlsx'),
            this.firebaseService.getUsers().pipe(first()).toPromise()
        ]).then(([excelData, firestoreData]: any) => {
            this.procesarDatosUnidos(excelData, firestoreData);
        }).catch(err => {
            console.error('Error al cargar datos:', err);
        });
    }

    procesarDatosUnidos(excelData: any[], firestoreData: any[]): void {
        // Excel ya viene como objetos usando sheet_to_json
        this.gruposOriginal = excelData.map(excelRow => {
            const matched = firestoreData.find(fireRow =>
                fireRow.cedula?.toString().trim() === excelRow['CEDULA']?.toString().trim()
            );
            return { ...excelRow, ...matched };
        });

        this.gruposFiltrados = [...this.gruposOriginal];
    }


    filtrar(): void {
        const filtro = this.filtroGrupo.toLowerCase();
        this.gruposFiltrados = this.gruposOriginal.filter(grupo =>
            grupo.NOMBRE?.toLowerCase().includes(filtro)
        );
        this.currentPage = 1;
    }

    mostrarDetalle(grupo: any): void {
        Swal.fire({
            title: `<span style="font-size:20px; color: #0b1011;">${grupo.NOMBRE}</span>`,
            html: `
                <table style="width: 100%; font-size: 14px; border-collapse: collapse; border: 1px solid #003366; padding: 0px;">
                      <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Investigación</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">${ grupo.INVESTIGACION }</td>
                      </tr>
                      <!--<tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Carreras en Línea</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">${ grupo.LINEA }</td>
                      </tr>-->
                      <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Formación General Docente - Taller Práctico 1</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">
                            ${ !grupo.curso ?  'Sin Inscripción' :
                            grupo.curso.toLowerCase() === 'generación de contenido educativo con ia' && grupo.grupo == "Grupo 1" ? grupo.curso + ' - Sala de Cómputo 1' :
                                grupo.curso.toLowerCase() === 'generación de contenido educativo con ia' && grupo.grupo == "Grupo 2" ? grupo.curso + ' - Sala de Cómputo 2' :
                                    grupo.curso.toLowerCase() === 'generación de contenido educativo con ia' && grupo.grupo == "Grupo 3" ? grupo.curso + ' - Sala de Cómputo 3' :
                            grupo.curso.toLowerCase() === 'herramientas de gamificación con ia en la enseñanza' && grupo.grupo == "Grupo 1" ? grupo.curso + ' - Sala de Cómputo 4' :
                                grupo.curso.toLowerCase() === 'herramientas de gamificación con ia en la enseñanza' && grupo.grupo == "Grupo 2" ? grupo.curso + ' - Sala de Cómputo 5' :
                                    grupo.curso.toLowerCase() === 'herramientas de gamificación con ia en la enseñanza' && grupo.grupo == "Grupo 3" ? grupo.curso + ' - Sala de Cómputo 6' :
                            grupo.curso.toLowerCase() === 'realidad aumentada con ia' && grupo.grupo == "Grupo 1" ? grupo.curso +' - Sala de Cómputo 7' :
                                grupo.curso.toLowerCase() === 'realidad aumentada con ia' && grupo.grupo == "Grupo 2" ? grupo.curso +' - Sala de Cómputo 9' :
                                    grupo.curso.toLowerCase() === 'realidad aumentada con ia' && grupo.grupo == "Grupo 3" ? grupo.curso +' - Sala de Cómputo Audivisuales 1' :
                            grupo.curso.toLowerCase() === 'metaversos para la educación' && grupo.grupo == "Grupo 1" ? grupo.curso +' - Sala de Cómputo Audivisuales 2' :
                                grupo.curso.toLowerCase() === 'metaversos para la educación' && grupo.grupo == "Grupo 2" ? grupo.curso +' - Sala de Cómputo Administrativas 1' :
                                    grupo.curso.toLowerCase() === 'metaversos para la educación' && grupo.grupo == "Grupo 3" ? grupo.curso +' - Sala de Cómputo Administrativas 3' :
                                'Curso desconocido'
                            }
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Formación General Docente - Taller 2</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">${ grupo.JD2 }</td>
                      </tr>
                      <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Consejería Académica - LALA</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">${ grupo.LALA }</td>
                      </tr>
                    </table>
            `,
            icon: 'info',
            iconColor: '#003366',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#003366'
        });
    }

    get totalPages(): number {
        return Math.ceil(this.gruposFiltrados.length / this.pageSize);
    }

    get gruposPaginados(): any[] {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        return this.gruposFiltrados.slice(startIndex, startIndex + this.pageSize);
    }

    cambiarPagina(pagina: number): void {
        if (pagina >= 1 && pagina <= this.totalPages) {
            this.currentPage = pagina;
        }
    }

    paginaAnterior(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    paginaSiguiente(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }
}
