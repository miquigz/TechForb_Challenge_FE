import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard:CanActivateFn = () => {
  const router = inject(Router);

  const token = localStorage.getItem("ACCESS_TOKEN");
  if(!token){
    console.log('Redirecting to login');
    router.navigate(['/auth/signin']);
    localStorage.removeItem("ACCESS_TOKEN");
    return false
  }
  router.navigate(['/home']);
  return true;
};
