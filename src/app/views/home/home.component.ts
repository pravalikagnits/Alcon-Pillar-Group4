import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('id_token') != null) {
      this.isUserLoggedIn = true;
    }

  }
}
