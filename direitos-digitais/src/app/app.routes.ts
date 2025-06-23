import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { QuestionarioPage } from './questionario/questionario.page';
import { RelatoPage } from './relato/relato.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { RecursosPage } from './recursos/recursos.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'questionario', component: QuestionarioPage },
  { path: 'relato', component: RelatoPage },
  { path: 'dashboard', component: DashboardPage },
  { path: 'recursos', component: RecursosPage },
];