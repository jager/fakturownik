import { IMenuItem } from './MenuItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inv-left-bar',
  templateUrl: './left-bar.component.html',
  styles: []
})
export class LeftBarComponent implements OnInit {
  private MenuItems: IMenuItem[] = [
    { Name: 'Faktury', Destination: 'invoices', IsActive: true, IconClass: 'zmdi zmdi-collection-text' },
    { Name: 'Klienci', Destination: 'clients', IsActive: false, IconClass: 'zmdi zmdi-accounts-list' },
    { Name: 'Użytkownicy', Destination: 'users', IsActive: false, IconClass: 'zmdi zmdi-accounts' }
  ];

  getMenuItems(): IMenuItem[] { return this.MenuItems; }

  constructor() { }

  ngOnInit() {
  }

}
