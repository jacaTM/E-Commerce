import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { LojaComponent } from './loja/loja.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';   


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    LojaComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMatSearchBarModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatListModule,
    NgxPaginationModule,
    HttpClientModule,
    NgxMaskModule.forRoot({ validation: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
