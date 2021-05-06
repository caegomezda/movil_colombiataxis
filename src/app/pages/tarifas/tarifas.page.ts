import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.page.html',
  styleUrls: ['./tarifas.page.scss'],
})
export class TarifasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  facebook(){
    // this.facebook_url.show();
    window.open('https://www.facebook.com/colombiataxis');
  }

  instagram(){
    // this.instagram_url.show();
    window.open('https://www.instagram.com/colombiataxis/');
  }

  whatsapp(){
    // this.whatsapp_url.show();
    window.open('https://api.whatsapp.com/send?phone=+573504117000&text=Hola quiero conocer más acerca de ustedes');
  }

}
