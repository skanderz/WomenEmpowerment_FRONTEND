import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifierComponent } from './modifier/modifier.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserlistFOComponent } from './userlist-fo/userlist-fo.component';
import { UserButtonActionFOComponent } from './user-button-action-fo/user-button-action-fo.component';
import { RequestListComponent } from './request-list/request-list.component';
import { UserButtonAccrefComponent } from './user-button-accref/user-button-accref.component';
import { UserButtonRetirerComponent } from './user-button-retirer/user-button-retirer.component';




@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ModifierComponent,
    UserlistFOComponent,
    UserButtonActionFOComponent,
    RequestListComponent,
    UserButtonAccrefComponent,
    UserButtonAccrefComponent,
    UserButtonRetirerComponent, 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
