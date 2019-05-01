import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {clientesRouting} from './clientes.routing';
import {FormsModule} from '@angular/forms';
import {ClientesService} from './clientes.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';



@NgModule({
  imports: [
    CommonModule,clientesRouting,FormsModule
  ],
  declarations: [ClienteFormComponent],
  providers : [ClientesService]
})
export class ClientesModule { }
