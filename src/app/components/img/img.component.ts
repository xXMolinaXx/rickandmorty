import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css'],
})
export class ImgComponent {
  @Input() stringPasadoPorPafre: string = 'valor init';
  @Output() valor2 = new EventEmitter<string>();
  valor = '';
  imgLoaded() {
    console.log('img cargado correctamente');
  }
  imgError() {
    console.log('error al cargar imagen');
    this.valor2.emit('valor de hijo enviado');
  }
}
