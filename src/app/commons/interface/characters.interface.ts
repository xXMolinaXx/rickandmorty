export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface RickMortyPeticion {
  info: Object;
  results: Array<Characters>;
}
