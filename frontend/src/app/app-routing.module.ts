import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { LojaComponent } from './loja/loja.component';


const routes: Routes = [
   {path: "", redirectTo: "/home", pathMatch: 'full'},
   
   {path: "home", component: PrincipalComponent},

   {path: "login", component: LoginComponent},

   {
    path: "loja/:categoria",
    component: LojaComponent,
    runGuardsAndResolvers: 'always'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
