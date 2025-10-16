import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- 1. Importar FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaprocesoComponent } from './components/listaproceso.component'; // <-- 2. Importar el componente

@NgModule({
  declarations: [
    AppComponent,
    ListaprocesoComponent // <-- 3. Declarar el componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // <-- 4. Agregar a imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }