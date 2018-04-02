import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InformationComponent } from './components/information/information.component';
import { ValidUserGuard } from './components/introduction/valid-user.guard';

const routes: Routes = [
  {path: 'introduction', component: IntroductionComponent},
  {path: 'information', component: InformationComponent, canActivate: [ValidUserGuard], data: {}},
  {path: '', redirectTo: '/introduction', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
