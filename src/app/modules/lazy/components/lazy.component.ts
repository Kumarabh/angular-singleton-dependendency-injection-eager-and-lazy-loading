import { Component } from "@angular/core";
import { AppService } from "src/app/services/app.service";
import { EagerService } from "../../eager/services/eager.service";
import { LazyService } from "../services/lazy.service";

@Component({
  selector: `app-lazy`,
  template: `
    <div style="border: 1px solid;">
    <h3>Lazy.</h3>
    <p>{{appDataResult}}</p>
    <p>{{eagerDataResult}}</p>
    <p>{{lazyDataResult}}</p>
    </div>
  `,
  styles: []
})
export class LazyComponent {
  appDataResult: string;
  eagerDataResult: string;
  lazyDataResult: string;

  constructor(
    private appService: AppService,
    private eagerService: EagerService,
    private lazyService: LazyService
    
    ) {
    this.appDataResult = this.appService.RandomNo;
    this.eagerDataResult = this.eagerService.RandomNo;
    this.lazyDataResult = this.lazyService.RandomNo;
  }
}