
import { SchedulerComponent } from './admin-layout/scheduler/scheduler.component';
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
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SuperPagesComponent } from './super-admin/super-pages/super-pages.component';
import { SuperDashboardComponent } from './super-admin/super-dashboard/super-dashboard.component';
import { SuperSettingsComponent } from './super-admin/super-settings/super-settings.component';
import { SuperClubsComponent } from './super-admin/super-clubs/super-clubs.component';
import { SuperSchedulerComponent } from './super-admin/super-scheduler/super-scheduler.component';
import { ViewTournamentComponent } from './super-admin/view-tournament/view-tournament.component';
import { SuperTeamsComponent } from './super-admin/super-teams/super-teams.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { AbcinLoginComponent } from './abcin-login/abcin-login.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', component: HomePageComponent },
   { path: 'home', component: HomePageComponent },
   { path: 'login-page', component: LoginPageComponent },
   { path: 'abcin-login', component: AbcinLoginComponent },
   { path: 'get-started', component: GetStartedComponent },
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
   {
      path: 'super-admin', component: SuperAdminComponent,
      children: [
         { path: 'super-dashboard', component: SuperDashboardComponent },
         { path: 'super-settings', component: SuperSettingsComponent },
         { path: 'super-clubs', component: SuperClubsComponent },
         { path: 'super-scheduler', component: SuperSchedulerComponent },
         { path: 'view-tournament', component: ViewTournamentComponent },
         { path: 'super-teams', component: SuperTeamsComponent }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
