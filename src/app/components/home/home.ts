import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  private observer = inject(BreakpointObserver);

  isMobile = signal(false);
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res: BreakpointState) => {
        this.isMobile.set(res.matches);
      });
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
