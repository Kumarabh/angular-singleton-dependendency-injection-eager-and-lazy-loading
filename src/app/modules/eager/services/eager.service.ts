import { Injectable } from "@angular/core";

@Injectable()
export class EagerService {
  private _randomNo: string;

  constructor() {
    this._randomNo = 'Eager service:' + Math.floor(Math.random() * 100);
  }

  get RandomNo() {
    return this._randomNo;
  }
}
