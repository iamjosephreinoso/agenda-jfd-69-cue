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
            const matched = firestoreData.find(fireRow => {
                const fireCedula = fireRow.cedula ? fireRow.cedula.toString().replace(/\D/g, '') : '';
                const excelCedula = excelRow['CEDULA'] ? excelRow['CEDULA'].toString().replace(/\D/g, '') : '';
                return fireCedula === excelCedula && fireCedula !== '';
            });
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

    // Dentro de tu clase GroupsComponent
    obtenerAula(grupo: any): string {
        if (!grupo.curso) return 'Sin Inscripción';

        const cursoNorm = grupo.curso.toLowerCase();

        if (cursoNorm.includes('generación de contenido')) {
            return 'Generación de Contenido Educativo con IA - Auditorio Luna Tobar';
        }

        // 2. Herramientas de Gamificación con IA
        if (cursoNorm.includes('gamificación')) {
            return 'Herramientas de Gamificación con IA - Auditorio Aurelio Pischedda';
        }

        // 3. Realidad Aumentada con IA
        if (cursoNorm.includes('realidad aumentada')) {
            return 'Realidad Aumentada con IA - Auditorio Luis Arba';
        }

        // 4. Ciencias de Datos con IA
        if (cursoNorm.includes('datos')) {
            return 'Ciencias de Datos con IA - Auditorio Leonidas Proaño';
        }
        return 'Aula por asignar';
    }

}


