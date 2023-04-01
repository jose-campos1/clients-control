import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clients:any[];
  client: Cliente = {
    name : '',
    surname: '',
    email: '',
    balance: 0
  }

  @ViewChild("clientForm") clientForm: NgForm
  @ViewChild('botonCerrar') botonCerrar: ElementRef

  id:any

  constructor(private clientService:ClienteService,
              private flashMessages:FlashMessagesService){}

  ngOnInit(): void {
  

   this.clientService.getClients().subscribe(
    clients => {
      this.clients = clients;
     }
   )
}






  getSaldoTotal(){
    let saldoTotal : number = 0;
    if(this.clients){
      this.clients.forEach(clients => {
        saldoTotal += clients.balance})
    }
   return saldoTotal
  }

  add({value,valid}: {value: Cliente, valid: any}){
    if(!valid){
      this.flashMessages.show(`Rellena el formulario`);
    }
    else{
      //Agregar el nuevo Cliente
      this.clientService.addClient(value)
      this.clientForm.resetForm();
      this.cerrarModal()
    }
  }
  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}
