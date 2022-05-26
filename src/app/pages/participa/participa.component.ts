import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-participa',
  templateUrl: './participa.component.html',
  styles: [
  ]
})
export class ParticipaComponent implements OnInit {

  recibe: any;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  recibeData(respuesta: any){
    this.recibe = respuesta;
    console.log(this.recibe);
    if(this.recibe=='ok'){
      $('#modalFileUpload').modal('hide');
      this.router.navigateByUrl('/gracias-participacion');
    }
    
  }

}
