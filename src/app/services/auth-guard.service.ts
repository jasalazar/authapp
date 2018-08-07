import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public auth:AuthService,
    private router:Router
   ) { }

   canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){

     if( this.auth.isAuthenticated() ){
       //this.router.navigate(['/protected']);
       return true;
     } else {
       console.error( "Blocked by guard" );
        //this.router.navigate(['/home']);
       return false;
     }

   }

}
