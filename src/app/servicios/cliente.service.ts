import { Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  collection,
  CollectionReference,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente.model';
import { addDoc, doc, getDoc, getFirestore } from 'firebase/firestore';

@Injectable()
export class ClienteService {
  clientsCollection: CollectionReference<Cliente>;
  cliente$: Observable<Cliente[]>;
  
  /*
  
  clientesColeccion: AngularFirestoreCollection<Cliente>;
  clienteDoc: AngularFirestoreDocument<Cliente>;
  clientes: Observable<Cliente[]>;
  cliente: Observable<Cliente>;

  */

  constructor(private firestore: Firestore) {
    const clientCollection = collection(this.firestore, 'clients');
    this.cliente$ = collectionData(clientCollection);
  }

  getClients(): Observable<Cliente[]> {
    let clientsRef = collection(this.firestore, 'clients');
    return collectionData(clientsRef, { idField: 'id' }) as Observable<
      Cliente[]
    >;
  }

  /**
    
  //Funcion con librerias nuevas para obtener los clientes de la bbdd
  
    getClients(): Observable<Cliente[]> {
    let clientsRef = collection(this.firestore, 'clients');
    return collectionData(clientsRef, { idField: 'id' }) as Observable<
      Cliente[]
    >;
  }

  //Funcion con librerias viejas

    getClients(): Observable<Cliente[]>{
    //Obtener los clientes
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
        map( cambios => {
            return cambios.map( accion => {
                const datos = accion.payload.doc.data() as Cliente;
                datos.id = accion.payload.doc.id;
                return datos;
            })
        })
    );
    return this.clientes;
}



   */

  addClient(client: Cliente) {
    client.id = doc(collection(this.firestore, 'id')).id;
    return addDoc(collection(this.firestore, 'clients'), client);
  }

  async getClient(id: any) {
    const db = getFirestore();
    const clientRef = doc(db, 'clients', id);
    const docSnap = await getDoc(clientRef);
    console.log(docSnap.data())
    return docSnap.data();
    
  }

  async modifyClient(client : any){
    const db = getFirestore();
    const clientRef = doc(db , 'clients' , client.id)
    return from(updateDoc(clientRef, {...client}))
    //Los tres Puntos hacen un spread de el cliente
  }

  q:any
  querySnapshot: any
  selection:string = ''

  async deleteClient(client:any){

    const db = getFirestore();

    const clientRef = doc(db , 'clients' , client.id);

    deleteDoc(clientRef).then((succes) => {console.log('deleted', succes)}).catch((error)=>{
      console.error(`error ${error}`)
    })

    /*console.log(this.selection);
    this.q = query(collection(this.firestore, 'clients'), where('name', '==', this.selection));
    this.querySnapshot = await getDocs(this.q);
    this.querySnapshot.forEach((doc:any) => {
      console.log(doc.id, ' => ', doc.data());
      deleteDoc(doc(this.firestore, 'clients' , doc.id))
    })
    }  */

  }
}
