import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent implements OnInit, OnDestroy {
  private observer = inject(BreakpointObserver);
  private renderer = inject(Renderer2);

  isMenuOpen = signal(false);
  isMobile = signal(false);

  @ViewChild('indicator') indicator!: ElementRef;
  @Output() sidenavToggle = new EventEmitter<void>();

  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res: BreakpointState) => {
        this.isMobile.set(res.matches);
      });
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
    this.isMenuOpen.update((val) => !val);
  }

  moveIndicator(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.indicator && target) {
      this.renderer.setStyle(
        this.indicator.nativeElement,
        'left',
        target.offsetLeft + 'px'
      );
      this.renderer.setStyle(
        this.indicator.nativeElement,
        'width',
        target.offsetWidth + 'px'
      );
    }
  }

  redirectToFB() {
    window.open(environment.fbLink, '_blank');
  }

  redirectToInsta() {
    window.open(environment.instaLink, '_blank');
  }

  redirectToYT() {
    window.open(environment.youtubeLink, '_blank');
  }

  redirectToLinkdin() {
    window.open(environment.linkedinLink, '_blank');
  }

  redirectToGithub() {
    window.open(environment.githubLink, '_blank');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
