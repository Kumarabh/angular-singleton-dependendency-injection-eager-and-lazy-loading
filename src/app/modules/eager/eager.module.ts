import { NgModule } from "@angular/core";
import { EagerComponent } from "./components/eager.component";
import { EagerRoutingModule } from "./eager-routing.module";
import { EagerService } from "./services/eager.service";

@NgModule({
  declarations: [ 
    EagerComponent 
  ],
  imports: [
    EagerRoutingModule
  ],
  providers: [ EagerService ]
})
export class EagerModule {}