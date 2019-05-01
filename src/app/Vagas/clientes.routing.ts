
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const CLIENTES_ROUTES: Routes = [
{
  
     path:'', component : ClienteFormComponent
  
}

];
  
export const clientesRouting = RouterModule.forChild(CLIENTES_ROUTES);



