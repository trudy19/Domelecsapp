import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './mycomponent/help/help.component';
import { HomeComponent } from './mycomponent/home/home.component';
import { ServicesComponent } from './mycomponent/services/services.component';
import { ScenariosComponent } from './mycomponent/scenarios/scenarios.component';
import { SettgsComponent } from './mycomponent/settgs/settgs.component';
import { ToggleComponent } from './mycomponent/toggle/toggle.component';
import { NavbarComponent } from './mycomponent/navbar/navbar.component';
import { CallComponent } from './mycomponent/call/call.component';
import { RoomsComponent } from './mycomponent/services/rooms/rooms.component';
import { HouseRoomsComponent } from './mycomponent/services/services_component/house-rooms/house-rooms.component';
import { PlugsComponent } from './mycomponent/services/services_component/plugs/plugs.component';
import { LightingyellowComponent } from './mycomponent/services/services_component/lightingyellow/lightingyellow.component';
import { JalousieComponent } from './mycomponent/services/services_component/jalousie/jalousie.component';
import { HouseColdComponent } from './mycomponent/services/services_component/house-cold/house-cold.component';
import { HouseWarmComponent } from './mycomponent/services/services_component/house-warm/house-warm.component';
import { CamerasurveillanceComponent } from './mycomponent/services/services_component/camerasurveillance/camerasurveillance.component';
import { SirenComponent } from './mycomponent/services/services_component/siren/siren.component';
import { PadlockComponent } from './mycomponent/services/services_component/padlock/padlock.component';
import { GarageComponent } from './mycomponent/services/services_component/garage/garage.component';
import { IntercomComponent } from './mycomponent/services/services_component/intercom/intercom.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    HomeComponent,
    ServicesComponent,
    ScenariosComponent,
    SettgsComponent,
    ToggleComponent,
    NavbarComponent,
    CallComponent,
    RoomsComponent,
    HouseRoomsComponent,
    PlugsComponent,
    LightingyellowComponent,
    JalousieComponent,
    HouseColdComponent,
    HouseWarmComponent,
    CamerasurveillanceComponent,
    SirenComponent,
    PadlockComponent,
    GarageComponent,
    IntercomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
