import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KitchenModule } from './kitchen/kitchen.module';
import { SharedModule } from './shared/shared.module';
import { WaiterModule } from './waiter/waiter.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
      ],
  imports: [
    BrowserModule,
    WaiterModule,
    KitchenModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
