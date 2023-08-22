import { NgModule } from '@angular/core';
import { BrowserModule, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { RouterModule, provideRouter } from '@angular/router';
import routeConfig from './routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [provideProtractorTestingSupport(),
      provideRouter(routeConfig)],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HomeComponent,
        RouterModule,
    ]
})
export class AppModule { }
