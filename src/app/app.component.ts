import { Component } from '@angular/core';
import { ColorModeService } from './color-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'countries';
  darkMode: boolean = false;

  constructor(private colorMode: ColorModeService) {}
  onModeToggle() {
    this.darkMode = !this.darkMode;
    this.colorMode.darkMode.next(this.darkMode);
  }
}
