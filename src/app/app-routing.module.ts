import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SingleUSerComponent } from './single-user/single-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user/:id', component: SingleUSerComponent},
    {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
