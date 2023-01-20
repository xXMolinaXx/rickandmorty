import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Characters } from 'src/app/commons/interface/characters.interface';
import { HttprequestService } from 'src/app/services/httprequest.service';

@Component({
  selector: 'app-charactersdetails',
  templateUrl: './charactersdetails.component.html',
  styleUrls: ['./charactersdetails.component.css'],
})
export class CharactersdetailsComponent {
  character: Characters = {
    created: '',
    episode: [],
    gender: '',
    id: 0,
    image: '',
    location: {
      name: '',
      url: '',
    },
    name: '',
    origin: {
      name: '',
      url: '',
    },
    species: '',
    status: '',
    type: '',
    url: '',
  };
  color = 'green';
  location: string = '0';
  origin: string = '0';
  constructor(
    private httpRequest: HttprequestService,
    private route: ActivatedRoute
  ) {}
  loadSuggestion() {
    this.httpRequest
      .getOneCharacters(this.route.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        this.color = data.status === 'Alive' ? 'green' : 'red';
        let lastElemt1 = data.location.url.split('/');
        let lastElemt2 = data.location.url.split('/');
        this.location = lastElemt1[lastElemt1.length - 1];
        this.origin = lastElemt2[lastElemt2.length - 1];
        this.character = data;
      });
  }
  ngOnInit() {
    this.loadSuggestion();
  }
}
