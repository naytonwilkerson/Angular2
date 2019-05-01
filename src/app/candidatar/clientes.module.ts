import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';
import {clientesRouting} from './clientes.routing';
import {FormsModule} from '@angular/forms';
import {ClientesService} from './clientes.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,clientesRouting,FormsModule
  ],
  declarations: [ClienteListComponent, ClienteFormComponent, ClienteCrudComponent,
    FilterPipe],
  providers: [ClientesService]
})
export class ClientesModule { }
