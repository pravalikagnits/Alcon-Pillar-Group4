import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public displayName: string = '';
  public password: string = '';
  public email: string = '';
  public username: string = '';
  public errorMessage: string = '';
  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit(): void {
  }
  registerUser(form: NgForm) {
    if (form.valid) {
      this.auth.signUp(this.displayName, this.username, this.password, this.email) .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/login');
          }
          this.errorMessage = 'User Registration failed!!!';
        });
    } else {
      this.errorMessage = 'Incorrect params';
    }
  }

}
