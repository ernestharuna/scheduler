
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ListComponent } from './admin-layout/list/list.component';
import { UsersProfileComponent } from './admin-layout/users-profile/users-profile.component';
import { DashboardComponent } from './admin-layout/dashboard/dashboard.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BlankComponent } from './blank/blank.component';
import { PaymentComponent } from './admin-layout/payment/payment.component';
import { SuperAdminLayoutComponent } from './super-admin-layout/super-admin-layout.component';
import { SuperDashboardComponent } from './super-admin-layout/super-dashboard/super-dashboard.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', component: HomePageComponent },
   { path: 'home', component: HomePageComponent },
   { path: 'login-page', component: LoginPageComponent },
   { path: 'admin-layout', component: AdminLayoutComponent,
      children: [
         { path: 'dashboard', component: DashboardComponent },
         { path: 'user-profile', component: UsersProfileComponent },
         { path: 'schedule-table', component: SchedulerComponent },
         { path: 'list', component: ListComponent },
         { path: 'blank', component: BlankComponent },
         { path: 'payment', component: PaymentComponent, }
      ]
   },
   { path: 'super-admin-layout', component: SuperAdminLayoutComponent, 
children: [
   { path: 'super-dashboard', component: SuperDashboardComponent } 
]}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
