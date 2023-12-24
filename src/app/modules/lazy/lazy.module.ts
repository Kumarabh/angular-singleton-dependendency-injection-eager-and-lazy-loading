import { NgModule } from "@angular/core";
import { LazyRoutingModule } from "./lazy-routing.module";
import { LazyComponent } from "./components/lazy.component";
import { LazyService } from "./services/lazy.service";

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    LazyRoutingModule
  ],
  providers: [ 
    LazyService
  ]
})
export class LazyModule {}