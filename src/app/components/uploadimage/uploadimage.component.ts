import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

   @Output() imagenServida: EventEmitter<any> = new EventEmitter();

  estatusSubida='';
  pesoValido:boolean=false;

  imagenPrevia: any;
  respuestaFtp: any;
  public archivos: any = []
  loading: boolean = false;
  muestraPrevio : boolean= false;

  datosImagen: any={
    status:"ok",
    nombre: "",
    peso:0
  } 

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  public onFileSelected(event: any) {

    const imagen = event.target.files[0];

    this.datosImagen.peso = imagen.size / 1024;

    if (this.datosImagen.peso > 3001){
      //console.log("la imagen es muy grande");
      this.estatusSubida = 'La imagen es muy grande';
      this.pesoValido = false;
    }else{
      this.estatusSubida = '';
      this.pesoValido = true;
    }


    if (imagen.type == "image/gif" || imagen.type == "image/jpeg" || imagen.type == "image/png" ) {
    //  console.log('Si es una imagen');
      this.archivos.push(imagen)
      this.blobFile(imagen).then((res: any) => {
      //  console.log(res);
        this.imagenPrevia = res.base;
        this.muestraPrevio = true;

      })
    } else {
      //  console.log('No es imagen');
      this.estatusSubida = "No es una imagen valida";

    }
  }

  blobFile = async ($event: any) => new Promise((resolve, reject) => {

    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        blob: $event,
        image,
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        blob: $event,
        image,
        base: null
      });
    };

  });


  //funcion para maqueta
  loadImages(){
    this.imagenServida.emit('ok');
  }

  //funcion de desarrollo
  /*loadImages = () => {
    try {
      const formData = new FormData();
      this.archivos.forEach((item: any) => {
        formData.append('file', item)
      });
      this.loading = true;
      this.estatusSubida = 'Cargando';

      //const URL = 'https://littlec.com.mx/uploadFiles/upload-files.php';
      const URL = 'https://myma-demos.com.mx/promos/uploadFiles/uploadBatman.php';

      this.http.post(URL, formData)
      .subscribe(res => {
        this.respuestaFtp = res;
      //  console.log(res);
        this.loading = false;
        if (this.respuestaFtp.status == true){
          this.datosImagen.nombre = this.respuestaFtp.generatedName;

          this.imagenServida.emit(this.datosImagen);

          //localStorage.setItem('participacion', 'ac5585d98646d255299c359140537783');

        //  console.log(this.datosImagen);
        }else{
          this.datosImagen.status="no"
          this.imagenServida.emit(this.datosImagen);

        }
      //  console.log('Carga exitosa');
      });
    } catch (e) {
    //  console.log('ERROR', e);
    }
  }*/

}
