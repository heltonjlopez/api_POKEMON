import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListaPokemonComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
