import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public afs:AngularFirestore) { }
  addtocart(p:Products){

        this.afs.collection('/cart/').add(p);
  }
  getAllProducts(){
    return this.afs.collection('/rolex/').snapshotChanges();
  }
  getAllProductswishlist(){
    return this.afs.collection('/cart/').snapshotChanges();
  }
}
