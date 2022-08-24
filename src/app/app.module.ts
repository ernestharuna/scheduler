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
import { PaymentComponent } from './admin-layout/payment/payment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SuperPagesComponent } from './super-admin/super-pages/super-pages.component';
import { ViewTournamentComponent } from './super-admin/view-tournament/view-tournament.component';
import { SuperSettingsComponent } from './super-admin/super-settings/super-settings.component';
import { SuperSchedulerComponent } from './super-admin/super-scheduler/super-scheduler.component';
import { SuperTournamentViewerComponent } from './super-admin/super-tournament-viewer/super-tournament-viewer.component';
import { SuperTeamsComponent } from './super-admin/super-teams/super-teams.component';
import { SuperPaymentComponent } from './super-admin/super-payment/super-payment.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { AbcinLoginComponent } from './abcin-login/abcin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SignUpComponent } from './sign-up/sign-up.component';


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
    PaymentComponent,
    SuperAdminComponent,
    SuperPagesComponent,
    ViewTournamentComponent,
    SuperSettingsComponent,
    SuperSchedulerComponent,
    SuperTournamentViewerComponent,
    SuperTeamsComponent,
    SuperPaymentComponent,
    GetStartedComponent,
    AbcinLoginComponent,
    SchedulerComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDialogModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
