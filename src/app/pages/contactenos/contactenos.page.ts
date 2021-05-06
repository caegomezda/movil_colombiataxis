import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {

  loginForm:FormGroup

  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  iconpassword  =  'eye-off';

  constructor(private fb:FormBuilder,
              private emailComposer:EmailComposer) { 
    this.loginForm = this.fb.group({
      Nombre:['',[Validators.required]],
      Telefono:['',[Validators.required]],
      Correo:['',[Validators.required]],
      Mensaje:['',[Validators.required]],
    })
  }

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

  submitEmail(){
    console.log(this.loginForm);
    this.correoSfun();
  }

  correoSfun(){
    console.log("Corre Sfun");

    this.emailComposer.open({
      to:'camiloedg23@gmail.com',
      cc:'camiloedg@gmail.com',
      body:`${this.loginForm.value}`,
    })
  }



}
