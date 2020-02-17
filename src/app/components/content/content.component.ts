import { Component, Input } from '@angular/core';
import { ModuleComponent } from '../module/module.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements ModuleComponent {
  @Input() model: any;

}
