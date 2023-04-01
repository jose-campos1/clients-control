import { Component, Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from "rxjs";


@Component({
    selector: 'app-guardian',
    templateUrl: './guardian.component.html',
    styleUrls: ['./guardian.component.css']
  })


@Injectable({
    providedIn: 'root'
})


@Injectable({ providedIn: 'root' })
export class GuardianComponent implements CanActivate {

  constructor(private readonly router:Router,
              private readonly afAuth: AngularFireAuth){}


      canActivate(): Observable<boolean> {
            return this.afAuth.authState.pipe(
                map( auth => {
                    if(!auth){
                        this.router.navigate(['/login'])
                        return false
                    }
                    else{
                        return true
                    }
                })
            )
          
      }
    }
