import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  days = [
    { name: 'Lunes 15', color: '#003366', events: ['Investigación Día 1'] },
    { name: 'Martes 16', color: '#003366', events: ['Investigación Dia 2']  },
    { name: 'Miércoles 17', color: '#003366', events: ['Carreras en Línea']  },
    { name: 'Jueves 18', color: '#003366', events: ['Formación Docente General Día 1', 'Inscribete al Taller Práctico Aquí'] },
    { name: 'Viernes 19', color: '#003366', events: ['Formación Docente General Día 2'] },
  ];

  days2 = [
    { name: 'Lunes 22', color: '#003366' },
    { name: 'Martes 23', color: '#003366' },
    { name: 'Miércoles 24', color: '#003366' },
    { name: 'Jueves 25', color: '#003366' },
    { name: 'Viernes 26', color: '#003366' },
  ];
}
