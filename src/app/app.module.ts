import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { CotiComponent } from './components/coti/coti.component';
import { SinDataComponent } from './components/sin-data/sin-data.component';
import { PlanDComponent } from './components/plan-d/plan-d.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ApiService } from './services/api.service';
import { Page404Component } from './shared/page404/page404.component';
import { StepperComponent } from './shared/stepper/stepper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CotiComponent,
    SinDataComponent,
    PlanDComponent,
    ThanksComponent,
    Page404Component,
    StepperComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
