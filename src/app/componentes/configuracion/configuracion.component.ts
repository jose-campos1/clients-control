import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/modelos/config.model';
import { ConfigServices } from 'src/app/servicios/configuration-services';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {


  allowRegister = false

  constructor(private router:Router,
              private configService:ConfigServices){}

  ngOnInit(): void {
    
    this.configService.getConfig().subscribe(
      (config:Config) => {
        this.allowRegister = config.allowRegister
      }
    )

  }

save(){
    let config = {allowRegister: this.allowRegister};
    this.configService.modifyConfig(config);
    this.router.navigate(['/'])
}


}
