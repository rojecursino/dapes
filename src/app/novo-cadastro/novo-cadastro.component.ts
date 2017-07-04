import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { UserRegisterModel } from './../../models/user.register.model';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-cadastro',
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.css']
})
export class NovoCadastroComponent implements OnInit {
  public user:UserRegisterModel;

  error = '';
  loading = false;

  constructor( private authenticationService: AuthenticationService, 
              private router: Router) { 
  }

  save(model: UserRegisterModel, isValid: boolean) {
    // call API to save customer
    this.loading = true;
        this.authenticationService.createUser(model.nome, model.email, model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/cadastroSobreVoce']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    console.log(model, isValid);
  }

  ngOnInit() {
    this.user = {
      nome: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

}
