import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'invoices', loadChildren: () => import('./site-main/invoices/invoices.module').then((m) => m.InvoicesModule) },
  {path: 'clients', loadChildren: () => import('./site-main/clients/clients.module').then((m) => m.ClientsModule) },
  {path: 'users', loadChildren: () => import('./site-main/users/users.module').then((m) => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
