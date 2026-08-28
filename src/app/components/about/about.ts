import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  skills = [
    { name: 'Angular', image: 'assets/skills/angular.png' },
    { name: 'Bootstrap', image: 'assets/skills/bootstrap.png' },
    { name: 'Django', image: 'assets/skills/django.svg' },
    { name: 'Docker', image: 'assets/skills/docker.png' },
    { name: 'Firebase', image: 'assets/skills/firebase.svg' },
    { name: 'GitHub', image: 'assets/skills/github.png' },
    { name: 'HTML', image: 'assets/skills/html.png' },
    { name: 'JavaScript', image: 'assets/skills/js.png' },
    { name: 'LangChain', image: 'assets/skills/langchain.svg' },
    { name: 'MongoDB', image: 'assets/skills/mongodb.svg' },
    { name: 'PostgreSQL', image: 'assets/skills/Postgresql.png' },
    { name: 'Python', image: 'assets/skills/python.svg' },
    { name: 'SQL', image: 'assets/skills/sql.png' },
    { name: 'Tailwind', image: 'assets/skills/tailwind.svg' },
    { name: 'TypeScript', image: 'assets/skills/TypeScript.png' }
  ];
}
