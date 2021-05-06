import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  constructor(private router : Router,
              private iab : InAppBrowser) { }

  ngOnInit() {
  }

  inicio(){
    this.router.navigate(['/menu']);
  }

  modulos(){
    this.router.navigate(['/modulos']);
  }

  contactenos(){
    this.router.navigate(['/contactenos']);
  }

  picoPlaca(){
    this.router.navigate(['/pico-placa']);
  }

  tarifas(){
    this.router.navigate(['tarifas']);
  }

  ingresar(){
    this.router.navigate(['ingresar']);
  }

  gps(){
    // this.iab.create('https://www.protrack365.com');
    window.open('https://www.protrack365.com');
  }

  facebook(){
    // this.iab.create('https://www.facebook.com/colombiataxis');
    window.open('https://www.facebook.com/colombiataxis');
  }

  instagram(){
    // this.iab.create('https://www.instagram.com/colombiataxis/');
    window.open('https://www.instagram.com/colombiataxis/');
  }

  whatsapp(){
    // this.iab.create('https://api.whatsapp.com/send?phone=+573504117000&text=Hola quiero conocer más acerca de ustedes');
    window.open('https://api.whatsapp.com/send?phone=+573504117000&text=Hola quiero conocer más acerca de ustedes');
  }

}
