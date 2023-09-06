import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Area } from './area.model';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  constructor(private fireStore: AngularFirestore) {}

  getAreas() {
    return this.fireStore.collection('areas').snapshotChanges();
  }

  getAreaById(id) {
    return this.fireStore.collection('areas').doc(id).valueChanges();
  }

  createArea(area: Area) {
    return new Promise<any>((resolve, reject) => {
      this.fireStore
        .collection('areas')
        .add(area)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updateArea(area: Area, id) {
    return this.fireStore.collection('areas').doc(id).update({
      codigo: area.codigo,
      name: area.name,
      lider: area.lider,
      state: area.state,
    });
  }

  deleteArea(area) {
    return this.fireStore.collection('areas').doc(area.id).delete();
  }
}
