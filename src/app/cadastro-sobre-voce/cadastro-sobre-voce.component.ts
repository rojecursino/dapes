import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-sobre-voce',
  templateUrl: './cadastro-sobre-voce.component.html',
  styleUrls: ['./cadastro-sobre-voce.component.css']
})
export class CadastroSobreVoceComponent implements OnInit {

  public user: UserModel;

  loading = false;
  error = false;
  imageurl = 'https://s3-us-west-2.amazonaws.com/dapesweb/dapes_verde.jpg';

  constructor(private router: Router) { }

  save(model: UserModel, isValid: boolean) {
    // call API to save customer
    this.loading = true;
    console.log(model, isValid);
  }


  ngOnInit() {
    this.user = {
      nome: '',
      email: '',
      cpf: ''
    }
  }

}
