import { CadastroConclusaoComponent } from './cadastro-conclusao/cadastro-conclusao.component';
import { CadastroDocumentosComponent } from './cadastro-documentos/cadastro-documentos.component';
import { CadastroFinanceiroComponent } from './cadastro-financeiro/cadastro-financeiro.component';
import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';
import { CadastroSobreVoceComponent } from './cadastro-sobre-voce/cadastro-sobre-voce.component';
import { MainComponent } from './main/main.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { AuthenticationService } from './../services/authentication.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EqualValidator } from './../directives/equal-validator.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'novo-cadastro', component: NovoCadastroComponent},
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'cadastroSobreVoce', component: CadastroSobreVoceComponent},
            {path: 'cadastroProfissional', component: CadastroProfissionalComponent},
            {path: 'cadastroEndereco', component: CadastroEnderecoComponent},
            {path: 'cadastroFinanceiro', component: CadastroFinanceiroComponent},
            {path: 'cadastroDocumentos', component: CadastroDocumentosComponent},
            {path: 'cadastroConclusao', component: CadastroConclusaoComponent}
        ]
    }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EqualValidator,
    NovoCadastroComponent,
    CadastroSobreVoceComponent,
    CadastroProfissionalComponent,
    CadastroEnderecoComponent,
    CadastroFinanceiroComponent,
    CadastroDocumentosComponent,
    CadastroConclusaoComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
