import { Component } from '@angular/core';
import { HttprequestService } from './services/httprequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  disabled = true;
  age = 50;
  showPracticeBlock = false;
  names = ['kenny', 'jared', 'molina', 'murillo'];
  showClass = true;
  imageSize = 10;
  enable() {
    this.disabled = !this.disabled;
  }


  add() {
    this.age = this.age + 1;
  }
  onscroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.title = element.value;
  }
  showPractice() {
    this.showPracticeBlock = !this.showPracticeBlock;
  }
  deleteaddclass() {
    this.showClass = !this.showClass;
  }
  imgLoaded() {
    console.log('img cargado correctamente');
  }
  imgError() {
    console.log('error al cargar imagen');
  }
  onloaded(value: string) {
    console.log('evento del padre', value);
  }

}
/*
Constructor: cuando se corre una instancia
ngOnChanges : corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.
ngOnInit: corre antes pero tiene la condicione que solo correo una vez. Ahi se corren eventos asincronos.
ngAfcterViewInit: corre cuando los hijos de ese componentes se han renderizado.
NgOnDestroy: Corre cuando se elimina el componente.
* */
