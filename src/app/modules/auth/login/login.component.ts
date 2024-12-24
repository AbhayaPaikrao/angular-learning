import { HttpClient } from '@angular/common/http';
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

  apiLoginObj = {
    EmailId: '',
    Password: '',
  };

  constructor(private route: Router, private http: HttpClient) {}

  onLogin() {
    // if (
    //   this.loginObj.userName === 'Abhaya' &&
    //   this.loginObj.password === 'Hi'
    // ) {
    //   localStorage.setItem('userName', this.loginObj.userName);
    //   this.route.navigate(['student/list']);
    // } else {
    //   alert('wrong password');
    // }

    this.http
      .post('https://projectapi.gerasim.in/api/UserApp/login', this.apiLoginObj)
      .subscribe({
        next: (resp: any) => {
          if (resp) {
            localStorage.setItem('userName', resp.data.token);
            this.route.navigateByUrl('student/list');
          }
        },
        error: (err: any) => {
          alert('Login Failed!');
        },
      });
  }
}
