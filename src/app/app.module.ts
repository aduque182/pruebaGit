import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { FrutaComponent } from './fruta/fruta.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {CochesComponent} from './coches/coches.component';
import {routing, appRoutingProviders} from './app.routing';
import {ConversorPipe} from './pipes/conversor.pipe';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {PlantillasComponent} from './plantillas/plantillas.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe, 
    CochesComponent,
    PlantillasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { } 