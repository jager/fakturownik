import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inv-site-header',
  template: `
  <div class="block-header">
    <div class="row">
        <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>Page Name</h2>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12">
            <ul class="breadcrumb float-md-right">
                <li class="breadcrumb-item"><a href="index.html"><i class="zmdi zmdi-home"></i> {{ SiteName }}</a></li>
                <!--
                <li class="breadcrumb-item"><a href="javascript:void(0);">Extra</a></li>
                <li class="breadcrumb-item active">Stater Page</li>
                -->
            </ul>
        </div>
    </div>
  </div>
  `,
  styles: []
})
export class SiteHeaderComponent implements OnInit {

  SiteName = 'Fakturownik';

  constructor() { }

  ngOnInit() {
  }

}
