import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private router:Router){

  }

  ngOnInit(): void {
   

  }

  public onClick():void{
    localStorage.getItem('id_token') != null ? this.router.navigateByUrl('/displayAddTournament') :this.router.navigateByUrl('/login');
  }
}
