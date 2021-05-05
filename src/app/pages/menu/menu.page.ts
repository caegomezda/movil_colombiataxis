import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  inicio(){
    this.router.navigate(['/menu'])
  }

  modulos(){
    this.router.navigate(['/modulos'])
    console.log("click")
  }

  contactenos(){
    this.router.navigate(['/contactenos'])
  }

  picoPlaca(){
    this.router.navigate(['/pico-placa'])
  }

  tarifas(){
    this.router.navigate(['tarifas'])
  }

  ingresar(){
    this.router.navigate(['ingresar'])
  }

}
