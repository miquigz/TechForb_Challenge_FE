import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const token = localStorage.getItem("ACCESS_TOKEN");
  if(!token){
    console.log('Redirecting to login');
    localStorage.removeItem("ACCESS_TOKEN");
    return router .parseUrl('/auth/signin');
  }

  return true;
};
