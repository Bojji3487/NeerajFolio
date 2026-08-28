import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { TopbarComponent } from '../topbar/topbar.component';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [MatSidenavModule, TopbarComponent, ResponsiveDirective],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css',
})
export class SidenavbarComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  toggle() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
