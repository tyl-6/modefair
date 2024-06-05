import { NgModule } from '@angular/core';
import { AppRouteModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './page/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './page/grid/grid.component';
import { RouterModule } from '@angular/router';

const DECLARATION: any[] = [
    AppComponent,
    GridComponent
];

const IMPORT: any[] =[
    AppRouteModule,
    BrowserModule,
    HomeModule,
    HttpClientModule
];

@NgModule({
    declarations: [...DECLARATION],
    imports: [...IMPORT],
    bootstrap: [AppComponent]
})

export class AppModule{}