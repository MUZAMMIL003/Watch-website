import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchitem:string='';

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  search(){
    if(this.searchitem =='rolex'){
      this.router.navigate(['/rolex']);
    }
  }

}
