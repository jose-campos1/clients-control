import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs';
import { FlashMessagesService } from 'flash-messages-angular';

@Injectable()
export class LoginService {
  constructor(
    private authService: AngularFireAuth,
    private flashMessages: FlashMessagesService
  ) {}

  async login(email: string, password: string) {
    try {
      const userCredential = await this.authService.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Could not log in');
    }
  }

  getAuth() {
    return this.authService.authState.pipe(map((auth) => auth));
  }

  logout() {
    this.authService.signOut();
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authService.createUserWithEmailAndPassword(email, password).then(
        (datos) => resolve(datos),
        (error) => {
          this.flashMessages.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 4000,
          });
        }
      );
    });
  }
}
