import { Component, OnInit } from '@angular/core';
import {Cliente} from 'app/VagasList/cliente';
import { ClientesService } from 'app/VagasList/clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService : ClientesService) { }

  clientes: Cliente[] = [];

  ngOnInit() {

    this.clienteService.getAll()
    .subscribe (data => this.clientes = data, err =>{
      alert("Aconteceu um erro!"+err);
    });
    this.clienteService.clientesChanged.subscribe(
      (Observable: any) => Observable.subscribe(
        data =>this.clientes =data
      )
    );
    
  }

}
