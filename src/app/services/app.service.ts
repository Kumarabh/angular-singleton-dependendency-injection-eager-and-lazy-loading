import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _randomNumber: string;

  constructor() {
    this._randomNumber = 'App service: ' + Math.floor(Math.random() * 100);
  }

  get RandomNo() {
    return this._randomNumber;
  }
}