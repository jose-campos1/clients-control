import { Injectable } from '@angular/core'
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'
import { Config } from '../modelos/config.model'



@Injectable()
export class ConfigServices{
    configDoc:AngularFirestoreDocument<Config>
    config:any


    //id unico de la coleccion :

    id = '1'

    constructor(private db:AngularFirestore){}

    getConfig(): Observable<Config>{
        this.configDoc = this.db.doc<Config>(`configs/ ${this.id}`);
        this.config = this.configDoc.valueChanges();
        return this.config;
    }

    modifyConfig(config:Config){
        this.configDoc = this.db.doc<Config>(`configs/${this.id}`);
        this.configDoc.update(config)
    }
}