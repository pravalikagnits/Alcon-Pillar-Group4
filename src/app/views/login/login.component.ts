import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private router: Router, private auth: AuthenticationService) { }

  goBack() {
    this.router.navigateByUrl('/');
  }

  loginUser(form: NgForm) {
    console.log('form submit');
    if (form.valid) {
      this.auth.authenticate(this.username, this.password).subscribe((response) => {
        if (response) {
          this.router.navigateByUrl('/tournamentsList');
        }
        this.errorMessage = 'Login Failed';
      });
    } else {
      this.errorMessage = 'login failed, wrong params';
    }
  }

}
