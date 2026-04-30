import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BindingPipe } from '@angular/compiler';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsersComponent } from './users/users.component';
import { ItemsComponent } from './items/items.component';
import { CarsComponent } from './cars/cars.component';
import { VechileService } from './vechile.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { FlipkartService } from './flipkart.service';
import { MailComponent } from './mail/mail.component';
import { MailService } from './mail.service';
import { WeatherComponent } from './weather/weather.component';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'databinding', component:DatabindingComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'pipes', component:PipesComponent},
    {path: 'users', component:UsersComponent},
    {path: 'items', component:ItemsComponent},
    {path: 'cars', component:CarsComponent},
    {path: 'vehicle', component:VehicleComponent},
    {path: 'account', component:AccountComponent},
    {path: 'flipkart', component:FlipkartComponent},
    {path: 'mail', component:MailComponent},
    {path: 'weather', component:WeatherComponent},
    {path: 'create-vechile', component:CreateVechileComponent}
   ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
