import { Type } from '@angular/core';

export class IModule {
  constructor(public component: Type<any>, public model: any) {}
}
