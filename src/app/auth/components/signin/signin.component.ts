import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  loginForm!:FormGroup;
  
  constructor( 
    private router:Router,
    // private authService:AuthService,
    private fs:FormBuilder){ }

  ngOnInit(): void {
    this.loginForm = this.fs.group({
      IDtype: ['', [Validators.required]],
      documentNumber: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(7)] ]
    });
  }

  loginSubmit(form:FormGroup){
    if (form.valid ){
      //TODO : llamada service
    }
  }


}
