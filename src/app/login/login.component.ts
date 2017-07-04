import { UserLoginModel } from './../../models/user.login.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgClass} from '@angular/common';

import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserLoginModel;

  loading = false;
  error = false;
  imageurl = 'https://s3-us-west-2.amazonaws.com/dapesweb/dapes_verde.jpg';
  
  constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

  doLogin(model: UserLoginModel, isValid: boolean){
    this.loading = true;
    this.error = false;
        this.authenticationService.login(model.username, model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/cadastroSobreVoce']);
                } else {
                    console.log("error" + this.error);
                    this.loading = false;
                }
            },err => this.error = true);
  }

  navegarCadastro() {
        this.router.navigateByUrl('/novo-cadastro');
    };

  ngOnInit() {
      this.user = {
        username: '',
        password: ''
    };
  }

}
