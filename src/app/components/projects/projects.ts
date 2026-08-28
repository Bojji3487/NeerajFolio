import { Component } from '@angular/core';
import { Tools } from '../../models/tools';
import { ProjectItemsComponent } from './project-items/project-items.component';
import { ResponsiveDirective } from '../../directives/responsive.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemsComponent, ResponsiveDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  firstProject: Tools[] = [
    { name: 'Python' },
    { name: 'Django' },
    { name: 'Angular' },
    { name: 'MongoDB' },
    { name: 'Docker' },
    { name: 'TypeScript' }
  ];

  secondProject: Tools[] = [
    { name: 'Python' },
    { name: 'FastAPI' },
    { name: 'Node.js' },
    { name: 'TypeScript' },
    { name: 'NLP' },
    { name: 'Redis' }
  ];
}
