import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorModeService {
  darkMode = new BehaviorSubject<boolean>(false);
}
