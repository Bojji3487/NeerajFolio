import { Component } from '@angular/core';
import { Home } from '../../components/home/home';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';
import { Resume } from '../../components/resume/resume';
import { Contact } from '../../components/contact/contact';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    Home,
    About,
    Projects,
    Resume,
    Contact,
    FooterComponent
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
