import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginObj = {
    userName: '',
    password: '',
  };

  constructor(private route: Router) {}
  onLogin() {
    if (
      this.loginObj.userName === 'Abhaya' &&
      this.loginObj.password === 'Hi'
    ) {
      localStorage.setItem('userName', this.loginObj.userName);
      this.route.navigate(['student/list']);
    } else {
      alert('wrong password');
    }
  }
}
