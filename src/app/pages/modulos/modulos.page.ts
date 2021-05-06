import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
})
export class ModulosPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
  };

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
