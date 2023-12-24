import { Component, Optional } from "@angular/core";
import { AppService } from "src/app/services/app.service";
import { EagerService } from "../services/eager.service";
import { LazyService } from "../../lazy/services/lazy.service";

@Component({
  selector: `app-eager`,
  template: `
    <div style="border: 1px solid;">
    <h3>Eager.</h3>
    <p>{{appDataResult}}</p>
    <p>{{eagerDataResult}}</p>
    <p>{{lazyDataResult}}</p>
    </div>
  `,
  styles: []
})
export class EagerComponent {
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