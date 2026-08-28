import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Resume } from './components/resume/resume';
import { Contact } from './components/contact/contact';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: MainLayout },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '**', redirectTo: '' }
];
