import { Routes } from "@angular/router";
import { SinDataComponent } from "../sin-data/sin-data.component";
import { PlanDComponent } from "../plan-d/plan-d.component";

export const dashboardRoutes : Routes = [
  {path: 'sinData', component: SinDataComponent },
  {path: 'plan', component: PlanDComponent},
]