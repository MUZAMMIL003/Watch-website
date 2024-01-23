import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Products } from '../products';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  rolexlist:Products[]=[];
  constructor(public data:DataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.data.getAllProductswishlist().subscribe(res =>{
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
