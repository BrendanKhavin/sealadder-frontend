import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDbService} from './movie-db.service';
import { SimmovieComponent } from './simmovie/simmovie.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SimmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
