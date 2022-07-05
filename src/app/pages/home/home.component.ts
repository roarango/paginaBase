import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  //LOGIN
  loginForm: FormGroup;
  respuestaLogin: any;
  isSubmitLogin: Boolean = false;


  //REGISTRO
  //variable para valida el formulario
  //registroForm: FormGroup; //para validar el formulario, es como un array con todos los datos
  registroForm: FormGroup;
  isSubmitReg:Boolean=false;  //para identificar que hizo submit

  constructor( private router: Router, public formBuilder:FormBuilder ) {

   //formulrio de REGISTRO
   this.registroForm = this.formBuilder.group({

    nombreregistro:['', [Validators.required,Validators.minLength(3),Validators.maxLength(100),Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóú]*')]],
    direccionregistro:['', [Validators.required,Validators.minLength(4),Validators.maxLength(100),Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóú # - ., 0-9]*')]],
    estadoregistro:['', [Validators.required, Validators.minLength(4),  Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóú ]*')]],
    emailregistro:['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
    passwordregistro:['', [Validators.required,Validators.minLength(5),Validators.maxLength(100),Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóú 0-9]*')]],
    telefonoregistro:['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]],
    edadregistro:['', [Validators.required,Validators.pattern('[0-9]*')]],
    terminos:['', [Validators.required]],
    // aviso:['', [Validators.required]],

});






    this.loginForm = this.formBuilder.group({
      emaillogin:['', [Validators.required]],
      inputPassword3:['', [Validators.required]]
    });



  }

  ngOnInit(): void {

  }

  loginusr(){
    
    this.isSubmitLogin= true;
    if(this.loginForm.valid){
      //envia a cuenta de usuario

      console.log('envia a cuenta');
      this.router.navigateByUrl('/cuenta');
    }
  }

 //REGISTRO USER
 registrousr(){
  
  this.isSubmitReg=true;
  if(this.registroForm.valid){
    //console.log('El registro es válido.')  
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    Swal.showLoading();

   

    
  }
}





}




