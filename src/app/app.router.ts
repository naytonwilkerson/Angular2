
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/login-guard';
import { LoginComponent } from './login/login.component';

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
  loadChildren: 'app/clientes/clientes.module#ClientesModule',
  canActivate: [AuthGuard]
},  
{
  path: 'clientesList',
  loadChildren: 'app/clientesList/clientes.module#ClientesModule',
  canActivate: [AuthGuard]
} ,
{
  path: 'Vagas',
  loadChildren: 'app/Vagas/clientes.module#ClientesModule',
  canActivate: [AuthGuard]
} ,
{
  path: 'VagasList',
  loadChildren: 'app/VagasList/clientes.module#ClientesModule',
  canActivate: [AuthGuard]
} ,
{
  path: 'candidatar',
  loadChildren: 'app/candidatar/clientes.module#ClientesModule',
  canActivate: [AuthGuard]
} ,
 {
   path: 'signin',
   component: LoginComponent
 }
];
  
export const RoutingModule = RouterModule.forRoot(routes);
