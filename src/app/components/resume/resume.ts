import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  isHovered = signal(false);

  toggleHover(hovered: boolean) {
    this.isHovered.set(hovered);
  }
}
