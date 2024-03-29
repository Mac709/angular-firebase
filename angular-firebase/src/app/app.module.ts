import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './popup.service';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    MarkerService,
    PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }