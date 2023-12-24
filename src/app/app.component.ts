import { Component, Optional } from '@angular/core';
import { AppService } from './services/app.service';
import { EagerService } from './modules/eager/services/eager.service';
import { LazyService } from './modules/lazy/services/lazy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appDataResult: string;
  eagerDataResult: string;
  lazyDataResult: string;

  constructor(
    private appService: AppService,
    private eagerService: EagerService,
    @Optional() private lazyService: LazyService
    ) {
    this.appDataResult = this.appService.RandomNo;
    this.eagerDataResult = this.eagerService.RandomNo;
    this.lazyDataResult = this.lazyService?.RandomNo;
  }

}
