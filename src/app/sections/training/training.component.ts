import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute} from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-profile',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})

export class TrainingComponent implements OnInit {

    activeTab: string = 'tab1';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const tab = params['tab'];
            if (tab === '2') {
                this.activeTab = 'tab2';
            } else {
                this.activeTab = 'tab1';
            }
        });
    }
    showGroupInfo(): void {
        Swal.fire({
            title: `<span style="font-size:20px; color: #0b1011;">Ubicación de los Talleres</span>`,
            html:`
                <table style="width: 100%; font-size: 13px; padding: 8px;">
                    <thead style="background-color: #003366; color: white;">
                        <tr>
                            <th style="width: 40%; text-align: center; padding: 5px; font-weight: normal;">Taller</th>
                            <th style="width: 25%; text-align: center; padding: 5px; font-weight: normal;"># Grupo</th>
                            <th style="width: 35%; text-align: center; padding: 5px; font-weight: normal;">Espacio Físico</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowspan="3" style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Generación de Contenido Educativa con IA</td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 1</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Sala de Cómputo 1</strong></td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 2</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Sala de Cómputo 2</strong></td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 3</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Sala de Cómputo 3</strong></td>
                    </tr>
                    <tr>
                        <td rowspan="3" style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Herramientas de Gamificación con IA en la Enseñanza</td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 1</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo 4</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 2</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo 5</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 3</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo 6</td>
                    </tr>
                    <tr>
                        <td rowspan="3" style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Realidad Aumentada con IA</td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 1</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo 7</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 2</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo 9</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 3</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo Audivisuales 1</td>
                    </tr>
                    <tr>
                        <td rowspan="3" style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Metaversos para la Educación</td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 1</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo Audivisuales 2</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 2</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo Administrativas 1</td>
                    </tr>
                    <!--<tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Grupo 3</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Sala de Cómputo Administrativas 3</td>
                    </tr>-->
                    </tbody>
                </table>`,
            icon: 'info',
            iconColor: '#003366',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#003366'
        });
    }

    showGroupInfo2(): void {
        Swal.fire({
            title: `<span style="font-size:20px; color: #0b1011;">Ubicación del Taller</span>`,
            html:`
                <table style="width: 100%; font-size: 13px; padding: 8px;">
                    <thead style="background-color: #003366; color: white;">
                        <tr>
                            <th style="text-align: center; padding: 8px; font-weight: normal;">Líder</th>
                            <th style="text-align: center; padding: 8px; font-weight: normal;"># Grupo - Espacio Físico</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Fabián Cuesta</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 1 -  Aula 1 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Jack Bravo</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 2 -  Aula 2 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Pedro Muñoz</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 3 -  Aula 3 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Xavier Merchán</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 4 -  Aula 4 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Inés Malo</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 5 -  Aula 5 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Edy Ayala</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 6 -  Aula 6 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Jorge García</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 7 -  Aula 8 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Rafael Campoverde</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 8 -  Aula 9 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Myriam Mancheno</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 9 -  Aula 10 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Jorge Fajardo</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 10 -  Aula 14 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Wilmer Contreras</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 11 -  Aula 15 Guillermo Mensi</td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;"><strong>Nelson Jara</strong></td>
                        <td style="text-align: left; border: 1px solid #003366; padding: 8px; color: #0b1011;">Grupo 12 -  Aula 17 Guillermo Mensi</td>
                    </tr>
                    </tbody>
                </table>`,
            icon: 'info',
            iconColor: '#003366',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#003366'
        });
    }
}
