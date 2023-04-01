import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RegisterComponent } from './componentes/register/register.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { GuardianComponent } from './guardian/guardian.component';

const routes: Routes = [
  {path: '', component: TableroComponent, canActivate:[GuardianComponent]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegisterComponent},
  {path: 'configuracion', component: ConfiguracionComponent , canActivate:[GuardianComponent]},
  {path: 'cliente/editar/:id', component: EditarClientesComponent, },
  {path: '**', component: NoEncontradoComponent}
];

/**
 * const routes: Routes = [
  {path: '', component: TableroComponent, canActivate:[GuardianComponent]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegisterComponent},
  {path: 'configuracion', component: ConfiguracionComponent , canActivate:[GuardianComponent]},
  {path: 'cliente/editar/:id', component: EditarClientesComponent, },
  {path: '**', component: NoEncontradoComponent}

   {path: '', component: TableroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegisterComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'cliente/editar/:id', component: EditarClientesComponent, },
  {path: '**', component: NoEncontradoComponent}

];
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
