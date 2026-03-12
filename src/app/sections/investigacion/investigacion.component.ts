import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2";

@Component({
    selector: 'app-nucleoicons',
    templateUrl: './investigacion.component.html',
    styleUrls: ['./investigacion.component.scss']
})
export class InvestigacionComponent {

    activeTab: string = 'tab1';

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            const tab = params['tab'];
            if (tab === 'tab3') {
                this.activeTab = 'tab3';
            }else if (tab === 'tab2') {
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
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Tema</th>

                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Expositor</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Taller de Diseño y Formulación de Proyectos de Investigación Científica</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Planteamiento del Problema y Diseño Conceptual del Proyecto</strong></td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Luis López PhD, Ing. Juan Pablo Vázquez PhD, Ing. Diana Moya MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Leonidas Proaño</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Taller de Análisis Estadístico e Inteligencia Artificial Aplicados a la Publicación Científica de Alto Impacto</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Validación de Resultados Estadísticos</strong></td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Lcdo. Andrés Ramírez PhD., Ing. Cecilia Villa PhD, Ing. Antonio Pérez MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Luna Tobar</td>
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

    showGroupInfo3(): void {
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
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Tema</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Expositor</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Taller de Diseño y Formulación de Proyectos de Investigación Científica</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Diseño Metodológico y Planificación del Proyecto</strong></td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Luis López PhD, Ing. Juan Pablo Vázquez PhD, Ing. Diana Moya MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Leonidas Proaño</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Taller de Análisis Estadístico e Inteligencia Artificial Aplicados a la Publicación Científica de Alto Impacto</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Estadística Científica, Psicometría y Metaanálisis Asistidos por IA</strong></td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Lcdo. Andrés Ramírez PhD., Ing. Cecilia Villa PhD, Ing. Antonio Pérez MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Luna Tobar</td>
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

    showGroupInfo4(): void {
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
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Tema</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Expositor</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Taller de Diseño y Formulación de Proyectos de Investigación Científica</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Estructuración del Proyecto y Revisión Final</strong></td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Luis López PhD, Ing. Juan Pablo Vázquez PhD, Ing. Diana Moya MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Leonidas Proaño</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Taller de Análisis Estadístico e Inteligencia Artificial Aplicados a la Publicación Científica de Alto Impacto</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Métricas Científicas, Estrategia de Publicación e Integración del Manuscrito</strong></td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Lcdo. Andrés Ramírez PhD., Ing. Cecilia Villa PhD, Ing. Antonio Pérez MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Auditorio Luna Tobar</td>
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

    showGroupInfo2(): void {
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
                                    <th style="padding: 8px; border-radius: 12px 0 0 12px; font-weight: 600; text-align: center; font-size: 12px;">Área de Conocimiento</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Expositor</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Ciencia y Tecnología - Ciencias Exactas</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Marco Capio PhD - Ing. Paul Narvaez PhD.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Aula 1 Juan Bottasso</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Ciencias Administrativas y Económicas</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Wilson Calle MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Aula 2 Juan Bottasso</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Ciencias de la Vida y de la Salud</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Fabricio Espinoza PhD.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Aula 7 Juan Bottasso</td>
                                </tr>
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">Ciencias de la Educación - Ciencias Sociales y del Comportamiento Humano - Humanidades</td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;"><strong>Ing. Diego Peñaloza MSc.</strong></td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">Aula 9 Juan Bottasso</td>
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

