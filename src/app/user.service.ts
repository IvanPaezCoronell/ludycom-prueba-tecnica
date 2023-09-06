import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireStore: AngularFirestore) {}

  getUsers() {
    return this.fireStore.collection('users').snapshotChanges();
  }

  getUserById(id) {
    return this.fireStore.collection('users').doc(id).valueChanges();
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.fireStore
        .collection('users')
        .add(user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updateUser(user: User, id) {
    return this.fireStore.collection('users').doc(id).update({
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      email: user.email,
      cc: user.cc,
      salary: user.salary,
      state: user.state,
    });
  }

  deleteUser(user) {
    return this.fireStore.collection('users').doc(user.id).delete();
  }
}
