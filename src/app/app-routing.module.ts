import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {

    path:"",
    redirectTo:"/register",
    pathMatch:"full"  
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    
  },

  {
    path:"home",
    component:HomeComponent,
    canActivate : [AuthGuard]
  },

  {
    path:"productlist",
    component: HomeComponent
  },

  {
    path:"product-details/:productId",
    component: ProductDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }