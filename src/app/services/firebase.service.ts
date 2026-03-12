import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  async createUser(data: any): Promise<void> {
    // 1️⃣ Validar si la cédula ya existe en cualquier curso/grupo
    const cedulaSnapshot = await this.firestore
        .collection('inscritos_cue_68', ref => ref.where('cedula', '==', data.cedula))
        .get()
        .pipe(first())
        .toPromise();

    if (!cedulaSnapshot.empty) {
      throw new Error('Ya existe una inscripción registrada con esta cédula.');
    }

    // 2️⃣ Validar cupo máximo de 40 en el grupo seleccionado
    const grupoSnapshot = await this.firestore
        .collection('inscritos_cue_68', ref =>
            ref.where('curso', '==', data.curso).where('grupo', '==', data.grupo)
        )
        .get()
        .pipe(first())
        .toPromise();

    if (grupoSnapshot.size >= 90) {
      throw new Error(
          `No Existen Cupos Disponibles en el ${data.grupo} de ${data.curso}.`
      );
    }

    // 3️⃣ Si pasa las validaciones → crear usuario
    await this.firestore.collection('inscritos_cue_68').add(data);
  }

  getUsers() {
    return this.firestore.collection('inscritos_cue_68').valueChanges({ idField: 'id' });
  }

  getGroupCount(curso: string, grupo: string) {
    return this.firestore.collection('inscritos_cue_68', ref =>
        ref.where('curso', '==', curso).where('grupo', '==', grupo)
    ).valueChanges().pipe(
        map(inscritos => inscritos.length)
    );
  }

    // Ejemplo de lo que debería tener tu servicio para los duplicados:
    checkUserInscription(cedula: string, curso: string): Promise<boolean> {
        return this.firestore.collection('usuarios', ref =>
            ref.where('cedula', '==', cedula)
                .where('curso', '==', curso)
        ).get().toPromise().then(snap => !snap.empty);
    }

}
