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

const routes: Routes = [
<<<<<<< HEAD
{ 
  path: '', pathMatch: 'full', component: HomePageComponent 
},
{
   path: 'home', component: HomePageComponent 
},
{
   path: 'login-page', component: LoginPageComponent
},
{
   path: 'list', component: ListComponent
},
{
   path: 'blank', component: BlankComponent
},
{
   path: 'scheduler', component: SchedulerComponent
},
{
   path: 'admin-layout', component: AdminLayoutComponent,
   children: [
      {
         path: 'dashboard',
         component: DashboardComponent
      },
      {
         path: 'users-profile',
         component: UsersProfileComponent
      }
   ]
},

=======
   { path: '', pathMatch: 'full', component: HomePageComponent },
   { path: 'home', component: HomePageComponent },
   { path: 'login-page', component: LoginPageComponent },
   { path: 'admin-layout', component: AdminLayoutComponent,
      children: [
         { path: 'dashboard', component: DashboardComponent },
         { path: 'users-profile', component: UsersProfileComponent }
      ]
   }
>>>>>>> 778a70ac85c8616cff730028242b27d6fdc8ac75
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
