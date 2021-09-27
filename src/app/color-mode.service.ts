import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorModeService {
  darkMode = new BehaviorSubject<boolean>(false);
  // private mode = new BehaviorSubject<Mode>(Mode.Light);
  // get mode$(): Observable<Mode>{
  //   return this.mode.asObservable();
  // }
  // changeMode(mode:Mode){
  //   this.mode.next(mode);
  // }
  // get mode$ (): Mode{
  //   return this.mode.getValue()
  // }
}
enum Mode {
  Light,
  Dark
}
