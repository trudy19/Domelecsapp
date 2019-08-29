import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mycomponent/home/home.component';
import { HelpComponent } from './mycomponent/help/help.component';
import { ScenariosComponent } from './mycomponent/scenarios/scenarios.component';
import { ServicesComponent } from './mycomponent/services/services.component';
import { CallComponent } from './mycomponent/call/call.component';
import { SettgsComponent } from './mycomponent/settgs/settgs.component';
import { HouseRoomsComponent } from './mycomponent/services/services_component/house-rooms/house-rooms.component';
import { JalousieComponent } from './mycomponent/services/services_component/jalousie/jalousie.component';
import { LightingyellowComponent } from './mycomponent/services/services_component/lightingyellow/lightingyellow.component';
import { HouseColdComponent } from './mycomponent/services/services_component/house-cold/house-cold.component';
import { HouseWarmComponent } from './mycomponent/services/services_component/house-warm/house-warm.component';
import { CamerasurveillanceComponent } from './mycomponent/services/services_component/camerasurveillance/camerasurveillance.component';
import { SirenComponent } from './mycomponent/services/services_component/siren/siren.component';
import { PadlockComponent } from './mycomponent/services/services_component/padlock/padlock.component';
import { GarageComponent } from './mycomponent/services/services_component/garage/garage.component';
import { IntercomComponent } from './mycomponent/services/services_component/intercom/intercom.component';
import { PlugsComponent } from './mycomponent/services/services_component/plugs/plugs.component';

const routes: Routes = [
  { path : '',component:HomeComponent },
  { path : 'help',component:HelpComponent },
  { path : 'scenarios',component:ScenariosComponent },
  { path : 'services',component:ServicesComponent },
  { path : 'call',component:CallComponent},
  { path : 'settings',component:SettgsComponent},
  { path : 'houseRooms', component:HouseRoomsComponent},
  { path : 'plugs', component:PlugsComponent},
  { path : 'lightingyellow', component:LightingyellowComponent},
  { path : 'jalousie', component:JalousieComponent},
  { path : 'house_cold', component:HouseColdComponent},
  { path : 'house_warm', component:HouseWarmComponent},
  { path : 'camerasurveillance', component:CamerasurveillanceComponent},
  { path : 'siren', component:SirenComponent},
  { path : 'padlock', component:PadlockComponent},
  { path : 'garage', component:GarageComponent},
  { path : 'intercom', component:IntercomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
