import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { CardComponent } from './components/card/card.component';
import { CharactersdetailsComponent } from './views/charactersdetails/charactersdetails.component';
import { IndexComponent } from './views/index/index.component';

@NgModule({
  declarations: [AppComponent, ImgComponent, CardComponent, CharactersdetailsComponent, IndexComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
