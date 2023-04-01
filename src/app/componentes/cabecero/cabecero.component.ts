import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { config } from 'rxjs';
import { ConfigServices } from 'src/app/servicios/configuration-services';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: any;
  allowRegister: boolean;
  showRegister:boolean;

  constructor(private logginService: LoginService,
            private router: Router,
            private configService:ConfigServices) {}

  
  ngOnInit(): void {
  this.logginService.getAuth().subscribe(auth =>{
    if(auth){
      this.isLoggedIn = true
      this.loggedInUser = auth.email
    }else{
      this.isLoggedIn = false
    }
  })

  this.configService.getConfig().subscribe(
    configS => { 
      this.allowRegister = configS.allowRegister
    }
  )

  }
  
  logout(){
    this.logginService.logout()
    this.isLoggedIn = false 
    this.router.navigate(['/login'])
  }

}
