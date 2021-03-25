import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private as:AuthService,private route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Promise<boolean>

  {
    return new Promise(resolve=>{
        this.as.user.subscribe(user=>{
          if(user){
            resolve(true)
          }else{
            this.route.navigate(['/'])
            resolve(false)
          }
        })
    })
  }
}
