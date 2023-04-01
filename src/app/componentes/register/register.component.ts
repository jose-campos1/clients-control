import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:any
  password:any
  auth:any
  
  constructor(private router:Router,
              private logginService: LoginService,
              private flashMessages: FlashMessagesService ){}


  ngOnInit(): void {

   this.logginService.getAuth().subscribe(
      auth => {
        if(auth){
          this.router.navigate(['/'])
        }
      }
    )
    
  }


  register(){
    this.logginService.register(this.email, this.password).then( res => {
      this.router.navigate(['/'])
    })
    .catch(err => {
      console.log(err)
    })
  }

}
