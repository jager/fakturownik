import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inv-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  costInvoicesButton;
  incomeInvoicesButton;

  constructor() {
  }

  ngOnInit() {
  }

  changeTab(element) {
    console.log(element.attributes['data-dest'].value);
    const tabId = element.attributes['data-dest'].value;
    const navLinks = document.getElementsByClassName('nav-link');
    const tabs = document.getElementsByClassName('tab-pane');
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0; i < navLinks.length; i++) {
      navLinks[i].className = navLinks[i] === element ? 'nav-link active' : 'nav-link';
    }
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].className = 'tab-pane in';
    }
    document.getElementById(tabId).className = 'tab-pane in active';
  }

}
