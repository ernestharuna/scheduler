import { UsersProfileComponent } from './users-profile/users-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
