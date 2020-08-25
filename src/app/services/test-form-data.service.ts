import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestFormDataService {

  constructor() { }

  private notificated$ = new Subject()

  sendNotice(){
    this.notificated$.next();
  }

  onSubscrube(){
    return this.notificated$.asObservable();
  }
}
