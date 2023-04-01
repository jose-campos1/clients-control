import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any
  password:any
  auth:any
  


  constructor(private router:Router,
              private logginService: LoginService,
              private flashMessages: FlashMessagesService ){}


  ngOnInit(){
    
    this.logginService.getAuth().subscribe(
      auth => {
        if(auth){
          this.router.navigate(['/'])
        }
      }
    )

      }
  
  

  async login() {
    try {
      const userCredential = await this.logginService.login(this.email, this.password);
      console.log('Logged in user:🥵🔥', userCredential.user);
      this.router.navigate(['/'])
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
  }



