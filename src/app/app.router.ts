
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path: '',
  component : HomeComponent
},
{
  path: 'home',
  component : HomeComponent
},
{
  path: 'clientes',
  loadChildren: 'app/clientes/clientes.module#ClientesModule'
},  
{
  path: 'clientesList',
  loadChildren: 'app/clientesList/clientes.module#ClientesModule'
} ,
{
  path: 'Vagas',
  loadChildren: 'app/Vagas/clientes.module#ClientesModule'
} ,
{
  path: 'VagasList',
  loadChildren: 'app/VagasList/clientes.module#ClientesModule'
} ,
{
  path: 'candidatar',
  loadChildren: 'app/candidatar/clientes.module#ClientesModule'
}  
];
  
export const RoutingModule = RouterModule.forRoot(routes);
