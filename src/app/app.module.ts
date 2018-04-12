import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRouter } from './router.module';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
   ReactiveFormsModule,
   FormsModule,
  //  RouterModule,
   AppRouter
  
  ],
  exports:[],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
