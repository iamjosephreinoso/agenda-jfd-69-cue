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
            if (tab === 'tab2') {
                this.activeTab = 'tab2';
            } else {
                this.activeTab = 'tab1';
            }
        });
    }
    showGroupInfo(): void {
        Swal.fire({
            html: `
                <div style="font-family: 'Fira Sans', sans-serif; padding: 0px;">
                    <div style="text-align: center; margin-bottom: 5px; margin-top: -10px;">
                        <span style="font-size: 25px; font-weight: 800; color: #003366; text-transform: uppercase;">
                            Ubicación de los Talleres
                        </span>
                    </div>
        
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: separate; border-spacing: 0 8px;">
                            <thead>
                                <tr style="background-color: #003366; color: white;">
                                    <th style="padding: 8px; border-radius: 12px 0 0 12px; font-weight: 600; text-align: center; font-size: 12px;">Taller</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Expositor</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Generación de Contenido Educativo con IA</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Andrés Calle PhD.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Luna Tobar</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Herramientas de Gamificación con IA</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Gustavo Bravo PhD.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Aurelio Pischedda</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Realidad Aumentada con IA</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Angel Perez MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Luis Arba</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Ciencias de Datos con IA</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Remigio Hurtado PhD.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Leonidas Proaño</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            width: '850px',
            padding: '1.50rem', // Reduce el padding general de la alerta
            background: '#fff',
            showConfirmButton: true,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#003366',
            customClass: {
                popup: 'animated fadeInDown'
            }
        });
    }
}
