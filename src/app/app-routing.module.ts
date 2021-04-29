import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotiComponent } from './components/coti/coti.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRoutes } from './components/dashboard/dashboard.routes';
import { SinDataComponent } from './components/sin-data/sin-data.component';
import { PlanDComponent } from './components/plan-d/plan-d.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { Page404Component } from './shared/page404/page404.component';

const routes: Routes = [

  {path: 'login', component: CotiComponent },
  {path: 'last', component: ThanksComponent},
  {path: '', component: DashboardComponent,
  children : dashboardRoutes},
  {path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
