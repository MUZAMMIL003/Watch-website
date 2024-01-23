import { Injectable, ɵComponentFactory } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseAuth :AngularFireAuth,private router :Router) { }
  signIn(email:string,password:string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');

      alert('login successfully');
      this.router.navigate(['/home']);

    }, (err: { message: any; })=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }
  register(email : string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(() =>{
     alert('registation successfully');
     
    }, (err: { message: any; }) => {
      alert(err.message);
      
    })
  }
  // sign out
  logout() {
    this.firebaseAuth.signOut(). then(() => {
      localStorage.removeItem('token');
      
    }, (err: { message: any; }) => {
      alert(err.message);
    })
  }
}
