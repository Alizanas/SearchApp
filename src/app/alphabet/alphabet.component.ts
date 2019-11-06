import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_models/Recipe';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  alphabet: String[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  recipes: Recipe[];
  
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchByLetter('a');
  }

  searchByLetter(letter: String){
    this.searchService.findByName(letter)
    .subscribe(
      data => {
        this.recipes = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

}
