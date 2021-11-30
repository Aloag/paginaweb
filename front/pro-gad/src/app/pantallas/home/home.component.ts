import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  trabajos(){
    this.router.navigate(['gad/trabajos'])
  }
  adulto(){
    this.router.navigate(['gad/adulto-mayor'])
  }
  turismo(){
    this.router.navigate(['gad/turismo'])
  }

}
