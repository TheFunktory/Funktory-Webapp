import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcresPrivacyComponent} from './acres-privacy/acres-privacy.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DataDeletionComponent} from './data-deletion/data-deletion.component';

const routes: Routes = [
  { path: 'acresprivacy', component: AcresPrivacyComponent },
  { path: 'acresdata', component: DataDeletionComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
