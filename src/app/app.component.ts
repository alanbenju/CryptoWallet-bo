import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService) { 
    localStorage.setItem("userId","5f2ded6ad64b0e6e5b318638")
  }
  ngOnInit(): void {
    this.userService.getById("5f2ded6ad64b0e6e5b318638").then((user)=>{
      localStorage.setItem("userBalance",user.balance.toString())
    })
  }
  title = 'Crypto portfolio';
}
