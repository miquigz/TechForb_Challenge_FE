import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CoreService } from 'src/app/core/services/core.service';
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
    private coreService:CoreService,
    private fs:FormBuilder){ }


  ngOnInit(): void {
    this.loginForm = this.fs.group({
      IDtype: ['DNI DEMO', [Validators.required]],
      documentNumber: [44111222, [Validators.required, Validators.minLength(8)]],
      password: ['12345678', [Validators.required, Validators.minLength(7)] ]
    });
  }

  loginSubmit(form:FormGroup){
    if (form.valid ){
      this.coreService.setShowLoader(true);
      const loginData = {
        documentNumber: form.value.documentNumber,
        password: form.value.password
      }
      this.authService.login(loginData)
      .pipe(take(1))
      .subscribe({
        next: (resp:any) => {
          this.coreService.setShowLoader(false);
          localStorage.setItem('ACCESS_TOKEN', resp.token);
          this.router.navigateByUrl('/home');
        },
        error: (err:any) => {
          console.log(err);
          this.loginForm.controls['password'].setValue('');
          this.coreService.setShowLoader(false);
          this.coreService.setToastData(
            {message:'Error al iniciar sesión', show:true, background:'bg-red-400', duration:5000});
        },
        complete: () => this.coreService.setShowLoader(false)
      });
    }
  }


}
