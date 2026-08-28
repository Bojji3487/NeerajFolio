import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
