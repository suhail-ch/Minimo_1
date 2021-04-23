import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguimientoCardComponent } from './seguimiento-card/seguimiento-card.component';

//formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeguimientoFormComponent } from './seguimiento-form/seguimiento-form.component';
import { SeguimientosComponent } from './seguimientos/seguimientos.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    SeguimientoCardComponent,
    SeguimientoFormComponent,
    SeguimientosComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
