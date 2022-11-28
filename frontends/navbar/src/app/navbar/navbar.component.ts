import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  imgSrc = assetUrl('logo_spms_completo_horizontal_cores.svg');
  pageTitle = 'Autenticação';

  constructor() {}

  ngOnInit(): void {}
}
