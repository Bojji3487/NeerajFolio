import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Responsive]',
  standalone: true
})
export class ResponsiveDirective {
  private element = inject(ElementRef);
  private breakPointObserver = inject(BreakpointObserver);

  constructor() {
    this.breakPointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe((result: BreakpointState) => {
        for (const breakpoint of Object.keys(result.breakpoints)) {
          if (result.breakpoints[breakpoint]) {
            if (breakpoint === Breakpoints.HandsetPortrait) {
              this.element.nativeElement.classList.remove('pc');
              this.element.nativeElement.classList.add('phone');
            }
            if (breakpoint === Breakpoints.WebLandscape) {
              this.element.nativeElement.classList.remove('phone');
              this.element.nativeElement.classList.add('pc');
            }
          }
        }
      });
  }
}
