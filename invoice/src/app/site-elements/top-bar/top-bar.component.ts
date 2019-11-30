import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inv-top-bar',
  templateUrl: './top-bar.component.html',
  styles: []
})
export class TopBarComponent implements OnInit {

  firstPageLink = 'invoices';
  private on = true;

  constructor() { }

  ngOnInit() {
  }

  toggleLeftBar() {
    this.on = !this.on;
    document.body.className = this.on ? 'theme-orange' : 'theme-orange ls-toggle-menu';
  }

}
