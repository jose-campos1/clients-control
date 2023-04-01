import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

//Este cliente es el inicializador, se le cambio el tipo a any porque no funcionaba

  client: any = {
    name : '',
    surname: '',
    email: '',
    balance: 0
  }

  //Este id es el id del usuario , se le cambio el tipo a any porque no funcionaba

  id:any;

  constructor(private clientService:ClienteService,
              private flashMessages:FlashMessagesService,
              private router:Router,
              private route:ActivatedRoute,
              ){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).then(client => {
      this.client = client;
    }).catch(err  => {console.log(err)})
  }


  saveClient({value , valid}: {value : any, valid: any}){
    if(!valid){
      this.flashMessages.show(`Por Favor llena el formulario correctamente`, {
        cssClass: `alert-danger`, timeout: 4000
      });
    }
    else{
     value.id = this.id
     //Modificar el Cliente
     this.clientService.modifyClient(value).then(value => {
        this.client = value
     }).catch(err => console.log('Error en el mod', err));
     this.router.navigate(['/']);
    }
  }

   async deleteClient(client:any){
    if(confirm(`Desea eliminar el cliente`)){
     await this.clientService.deleteClient(client).then(client => {
      this.client = client
     }).catch(err => {
      console.error(`err ${err}`)
     })
      
      this.router.navigate(['/'])
    }
  }
}

