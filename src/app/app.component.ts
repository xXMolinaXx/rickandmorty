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
  suggestion: any[] = [];
  showNoContent = false;
  loading = false;
  enable() {
    this.disabled = !this.disabled;
  }
  loadSuggestion() {
    fetch(`https://rickandmortyapi.com/api/character/1,2,3,4,5`)
      .then((response) => response.json())
      .then((data) => {
        this.suggestion = data;
      })
      .catch((data) => console.log(data));
  }
  ngOnInit() {
    this.showNoContent = true;
    this.loadSuggestion();
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
    this.loading = true;
    fetch(`https://rickandmortyapi.com/api/character/?name=${this.valueSearch}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((data) => {
        this.loading = false;
        if (data.length === 0) {
          this.showNoContent = true;
        } else {
          this.showNoContent = false;
        }
        this.characters = data.results;
      })
      .catch((data) => {
        this.showNoContent = true;
        this.loading = false;
        this.characters = [];
        console.log('error', data);
      });
  }
}
/*
Constructor: cuando se corre una instancia
ngOnChanges : corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.
ngOnInit: corre antes pero tiene la condicione que solo correo una vez. Ahi se corren eventos asincronos.
ngAfcterViewInit: corre cuando los hijos de ese componentes se han renderizado.
NgOnDestroy: Corre cuando se elimina el componente.
* */
