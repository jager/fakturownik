import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesRoutingModule } from './invoices-routing.module';



@NgModule({
  declarations: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ],
  exports: [
    InvoiceListComponent
  ]
})
export class InvoicesModule { }
