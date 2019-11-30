import { ClientsListComponent } from './clients-list/clients-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
