import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isUserLoggedIn: boolean = false;

  constructor(private router:Router){

  }

  ngOnInit(): void {
    if (localStorage.getItem('id_token') != null) {
      this.isUserLoggedIn = true;
    }

  }

  public onClick():void{
    this.isUserLoggedIn ? this.router.navigateByUrl('/displayAddTournament') :this.router.navigateByUrl('/login');
  }
}
