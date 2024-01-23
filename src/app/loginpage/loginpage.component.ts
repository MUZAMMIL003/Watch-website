import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  alreadyanuser:boolean=true;
  email:string='';
  password:string='';
  emaill:string='';
  passwordl:string='';

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  register(){
      
    if(this.email == ''){
      alert('please enter email');
      return;

     }
  
     if(this.password == '') {
      alert('please enter password');
      return;
     }
     
  
     this.auth.register    (this.email,this.password);
     this.email='';
     this.password = '';
     
  }

  signIn(){
      
    if(this.emaill == ''){
      alert('please enter email');
      return;

     }
  
     if(this.passwordl == '') {
      alert('please enter password');
      return;
     }
     
  
     this.auth.signIn    (this.emaill,this.passwordl);
     this.emaill='';
     this.passwordl = '';
     
  }


}
