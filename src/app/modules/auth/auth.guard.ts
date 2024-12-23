import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);
  let localUserName = localStorage.getItem('userName');
  if (localUserName) {
    return true;
  } else {
    router.navigateByUrl('auth/login');
    return false;
  }
};
