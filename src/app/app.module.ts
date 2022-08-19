import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './admin-layout/dashboard/dashboard.component';
import { UsersProfileComponent } from './admin-layout/users-profile/users-profile.component';
import { ListComponent } from './admin-layout/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlankComponent } from './blank/blank.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { PaymentComponent } from './admin-layout/payment/payment.component';
import { SuperAdminLayoutComponent } from './super-admin-layout/super-admin-layout.component';
import { SuperSidebarComponent } from './super-admin-layout/super-sidebar/super-sidebar.component';
import { SuperDashboardComponent } from './super-admin-layout/super-dashboard/super-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    AdminLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    UsersProfileComponent,
    ListComponent,
    BlankComponent,
    SchedulerComponent,
    PaymentComponent,
    SuperAdminLayoutComponent,
    SuperSidebarComponent,
    SuperDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
