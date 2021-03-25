import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataArray
  constructor(private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
    this.fs.collection("products").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          title:element.payload.doc.data()['title'],
          description:element.payload.doc.data()['description'],
          image:element.payload.doc.data()['image'],
          uid:element.payload.doc.data()['uid'],
       }
       })
     })
  }

  detail(id){
    this.route.navigate(['/product/'+id])
   
  }

}
