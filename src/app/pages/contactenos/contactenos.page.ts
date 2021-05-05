import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  // inicio(){
  //   this.router.navigate(['/menu'])
  // }

  // modulos(){
  //   this.router.navigate(['/modulos'])
  // }

  // contactenos(){
  //   this.router.navigate(['/contactenos'])
  // }

  // picoPlaca(){
  //   this.router.navigate(['/pico-placa'])
  // }

  // tarifas(){
  //   this.router.navigate(['tarifas'])
  // }

  // ingresar(){
  //   this.router.navigate(['ingresar'])
  // }

}
