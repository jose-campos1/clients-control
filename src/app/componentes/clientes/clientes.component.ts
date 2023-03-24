import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clients:Cliente[];

  constructor(private clientService:ClienteService){}

  ngOnInit(): void {
   this.clientService.getClients().subscribe(clients => this.clients = clients)
  }

}
