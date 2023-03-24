import { Inject, inject, Injectable } from '@angular/core';
import { collectionData, Firestore , collection, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente.model';
import 'firebase/firestore';; 


@Injectable()
export class ClienteService {

  clientsCollection: CollectionReference<Cliente>;
  cliente$: Observable<Cliente[]>

  constructor(private firestore: Firestore) {
    const clientCollection = collection(this.firestore, 'clients')
    this.cliente$ = collectionData(clientCollection)
  }

  getClients():Observable<Cliente[]>{
    let clientsRef = collection(this.firestore, 'clients')
    return collectionData(clientsRef,{idField: 'id'}) as Observable<Cliente[]>
  }


}
