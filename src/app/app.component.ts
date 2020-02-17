import { Component, OnInit } from '@angular/core';
import { IModule } from './classes/i-module';
import { GetModulesService } from './services/get-modules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'modular';
  modules: IModule[];

  constructor(private getModulesService: GetModulesService) {}

  ngOnInit() {
    this.getModulesService.getModules().subscribe(
      mods => this.modules = mods
    );
  }



}
