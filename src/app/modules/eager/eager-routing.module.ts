import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EagerComponent } from "./components/eager.component";

const routes: Routes = [
  { path: 'eager', component: EagerComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerRoutingModule {}