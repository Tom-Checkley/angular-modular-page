import { Injectable } from '@angular/core';
import { IModule } from '../classes/i-module';
import { BannerComponent } from '../components/banner/banner.component';
import { ContentComponent } from '../components/content/content.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetModulesService {

  getModules(): Observable<IModule[]> {
    return of(
      [
        new IModule(BannerComponent, {title: 'Modular content'}),
        new IModule(ContentComponent, {title: 'Content component', body: 'Lorem ipsum dolor mit set.'})
      ]
    );
  }
}
