import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Characters, RickMortyPeticion } from '../commons/interface/characters.interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttprequestService {
  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  getCharacters(valueSearch: string) {
    return this.http.get(
      `https://rickandmortyapi.com/api/character/?name=${valueSearch}`
    ).pipe(
      catchError(this.handleError)
    );
  }
  getOneCharacters(valueSearch: string | null) {
    return this.http.get<Characters>(
      `https://rickandmortyapi.com/api/character/${valueSearch}`
    ).pipe(
      catchError(this.handleError)
    );
  }
}
