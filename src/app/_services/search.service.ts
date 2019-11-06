import { Injectable } from '@angular/core';
import { ResponseRecipe } from '../_models/ResponseRecipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = '/api';

  constructor(private http: HttpClient) {
   }
   
   findByName(name: String){
     return this.http.get<ResponseRecipe>(this.url + '/?q=' + name);
   }

   findByIngredients(ingredients: String){
    return this.http.get<ResponseRecipe>(this.url + '/?i=' + ingredients);
   }

   findByPage(page: Number){
    return this.http.get<ResponseRecipe>(this.url + '/?p=' + page);
   }
}