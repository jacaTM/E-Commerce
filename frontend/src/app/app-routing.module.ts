import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { LojaComponent } from './loja/loja.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
   {path: "", redirectTo: "/home", pathMatch: 'full'},
   
   {path: "home", component: PrincipalComponent},

   {path: "login", component: LoginComponent},

   {
    path: "loja/:plataforma",
    component: LojaComponent,
    runGuardsAndResolvers: 'always'
  },
  {path: "cadastro", component: CadastroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
