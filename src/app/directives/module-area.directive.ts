import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModuleArea]'
})
export class ModuleAreaDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
