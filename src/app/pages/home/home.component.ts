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

  loginForm: FormGroup;
  respuestaLogin: any;
  isSubmitLogin: Boolean = false;

  constructor( private router: Router, public formBuilder:FormBuilder ) {

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

}




