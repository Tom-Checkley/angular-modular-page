import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { IModule } from 'src/app/classes/i-module';
import { ModuleAreaDirective } from 'src/app/directives/module-area.directive';

@Component({
  selector: 'app-modular-content',
  templateUrl: './modular-content.component.html',
  styleUrls: ['./modular-content.component.scss']
})
export class ModularContentComponent implements OnInit {
  @Input() modules: IModule[];
  @ViewChild(ModuleAreaDirective, {static: true}) moduleArea: ModuleAreaDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.populatePage();
  }

  populatePage() {
    this.modules.forEach((mod, i) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(mod.component);
      const viewContainerRef = this.moduleArea.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as IModule).model = mod.model;
    });
  }

}
