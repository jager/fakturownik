import { SharedModule } from './shared/shared.module';
import { InvoicesModule } from './site-main/invoices/invoices.module';
import { UsersModule } from './site-main/users/users.module';
import { ClientsModule } from './site-main/clients/clients.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './site-elements/top-bar/top-bar.component';
import { LeftBarComponent } from './site-elements/left-bar/left-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientsModule,
    UsersModule,
    InvoicesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
