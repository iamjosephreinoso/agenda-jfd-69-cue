import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public readExcelFile(file: string): Promise<any[]> {
    return fetch(file)
        .then(response => response.arrayBuffer())
        .then(data => {
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          return XLSX.utils.sheet_to_json(worksheet, { defval: null });
        });
  }

}
