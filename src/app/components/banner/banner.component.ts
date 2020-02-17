import { Component, Input } from '@angular/core';
import { ModuleComponent } from '../module/module.component';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements ModuleComponent {
  @Input() model: any;

  constructor() { }

}
