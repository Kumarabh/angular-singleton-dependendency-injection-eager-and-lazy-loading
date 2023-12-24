import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerModule } from './modules/eager/eager.module';

const routes: Routes = [
  { path: 'lazy', loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule)},
  // { path: '', loadChildren: () => import('./modules/eager/eager.module').then(m => m.EagerModule)}
  // { path: 'eager', loadChildren: () => EagerModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
