import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Products } from '../products';

@Component({
  selector: 'app-rolex',
  templateUrl: './rolex.component.html',
  styleUrls: ['./rolex.component.css']
})
export class RolexComponent implements OnInit {
  rolexlist:Products[]=[];

  constructor(public data :DataService) {
   }

  ngOnInit(): void {
    this.getAllProducts();

  }
  addtowishlist(product:Products){
    this.data.addtocart(product);
  }
  getAllProducts(){
    this.data.getAllProducts().subscribe(res =>{
      this.rolexlist = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        //alert('started');
        return data;
        
      })
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }
  
  

}
