import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentComponent } from './components/content/content.component';
import { ModuleAreaDirective } from './directives/module-area.directive';
import { ModularContentComponent } from './components/modular-content/modular-content.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    ModuleAreaDirective,
    ModularContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    BannerComponent,
    ContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
