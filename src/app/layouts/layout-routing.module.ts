import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { RegisterComponent } from '../components/register/register.component';
import { TextComponent } from '../components/text/text.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'home',
      //   component: HomeComponent,
      // },
    ],
  },
  {
    path: '',
    component: ExternalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'text',
        component: TextComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
