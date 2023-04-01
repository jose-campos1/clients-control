import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment'; 
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule , SETTINGS} from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { from } from 'rxjs';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { ClienteService } from './servicios/cliente.service';
import { FlashMessagesModule } from 'node_modules/flash-messages-angular'
import { LoginService } from './servicios/login.service';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { GuardianComponent } from './guardian/guardian.component';
import { ConfigServices } from './servicios/configuration-services';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClientesComponent,
    LoginComponent,
    RegisterComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
    GuardianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
     FlashMessagesModule.forRoot(),
     AngularFireAuthModule
  ],
  providers: [ClienteService,
     LoginService , 
     GuardianComponent , 
     { provide: SETTINGS, useValue:{}},
      ConfigServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
