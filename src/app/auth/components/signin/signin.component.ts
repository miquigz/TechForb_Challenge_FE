import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  loginForm!:FormGroup;
  
  constructor( 
    private router:Router,
    private authService:AuthService,
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
      const loginData = {
        documentNumber: form.value.documentNumber,
        password: form.value.password
      }
      this.authService.login(loginData)
      .pipe(take(1))
      .subscribe({
        next: (resp:any) => {
          localStorage.setItem('ACCESS_TOKEN', resp.token);
          this.router.navigateByUrl('/home');
          //TODO: Success snackbar
        },
        error: (err:any) => {
          console.log(err);
          this.loginForm.controls['password'].setValue('');
          //TODO: SNACKBAR ERROR
        }});
    }
  }


}
