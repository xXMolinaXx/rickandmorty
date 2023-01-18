import { Component } from '@angular/core';

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
  characters: any[] = [];
  showClass = true;
  imageSize = 10;
  valueSearch = '';
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
  search() {
    fetch(`https://rickandmortyapi.com/api/character/?name=${this.valueSearch}`)
      .then((response) => response.json())
      .then((data) => (this.characters = data.results))
      .catch((data) => console.log(data));
  }
}
