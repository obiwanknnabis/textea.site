import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { TextComponent } from '../components/text/text.component';
import { ContactComponent } from '../components/contact/contact.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

@NgModule({
  declarations: [
    ExternalLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    TextComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
