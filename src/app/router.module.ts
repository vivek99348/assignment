import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const routes:Routes = [
    {path:'',redirectTo:'admin',pathMatch:'full'},
    {path:'admin',component:AdminComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouter {}