import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sa:AuthService,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
  }
  register(f){
   // console.log(f.value)
   let data=f.value
    this.sa.signUp(data.email,data.password).then((user)=>{
      localStorage.setItem("userConnect",user.user.uid)
      this.fs.collection("users").doc(user.user.uid).set({
        flName:data.flName,
        email:data.email,
        bio:data.bio,
        uid:user.user.uid,
        image:'https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg'

      }).then(()=>{

        this.route.navigate(['/'])
      })
    }).catch(()=>{
      console.log("error !")
    })
  }

}
