import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class LazyService {
  private _randomNo: string = '';

  constructor() {
    this._randomNo = 'Lazy service:' + Math.floor(Math.random() * 100);
  }

  get RandomNo() {
    return this._randomNo;
  }
}