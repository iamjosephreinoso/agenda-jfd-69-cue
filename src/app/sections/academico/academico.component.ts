import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from "sweetalert2";


@Component({
  selector: 'app-academico',
  templateUrl: './academico.component.html',
  styleUrls: ['./academico.component.scss']
})
export class AcademicoComponent {

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

    showGroupInfoEncuesta(): void {
        Swal.fire({
            html: `
                <div style="font-family: 'Fira Sans', sans-serif; padding: 0px;">
                    <div style="text-align: center; margin-bottom: 5px; margin-top: -10px;">
                        <span style="font-size: 25px; font-weight: 800; color: #003366; text-transform: uppercase;">
                            Taller
                        </span>
                    </div>

                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: separate; border-spacing: 0 8px;">
                            <thead>
                                <tr style="background-color: #003366; color: white;">
                                    <th style="padding: 8px; border-radius: 12px 0 0 12px; font-weight: 600; text-align: center; font-size: 12px;">Área de Conocimiento</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Grupo</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Facilitadores</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Grupo 1 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias Administrativas y Económicas
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 1
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Fabián Cuesta - Verónica Espinoza</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 1 Edificio Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 2 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencia y Tecnología - Ciencias Exactas
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 2
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Romel Rodas - Sheila Serrano - Fernando Soto</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Auditorio Leonidas Proaño
                                    </td>
                                </tr>

                                <!-- Grupo 3 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias de la Vida - Ciencias de la Salud
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 3
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Elena Coyago - Geovanna Zea</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Auditorio Luis Arba
                                    </td>
                                </tr>

                                <!-- Grupo 4 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias Sociales y del Comportamiento Humano
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 4
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Floralba Aguilar - Gilberto Brito</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 4 Edificio Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 5 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Educación
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 5
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Alicia Cedeño - Fausto Sáenz</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 5 Edificio Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 6 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Razón y Fe
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 6
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Dunia Ojeda - Merdardo Silva</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 6 Edificio Guillermo Mensi
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            width: '950px',
            padding: '1.50rem',
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
