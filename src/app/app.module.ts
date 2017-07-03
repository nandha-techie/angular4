import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot([
    	{path: 'page1', component: Page1Component },{path: 'page2', component: Page2Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
