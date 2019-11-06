import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/search.service';
import { Recipe } from '../_models/Recipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public recipes: Recipe[];
  public recipePreview: Recipe;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchByPage(1);
  }


  search(inputText, tipeSelect: String){
    switch (tipeSelect) {
      case 'name':
        this.searchByName(inputText)
        break;
      case 'ingredients':
        inputText = inputText.split(" ").join(",");
        this.searchByIngredients(inputText);
        break;
    }
  }


  searchByName(textToSearch){
    this.searchService.findByName(textToSearch)
    .subscribe(
      data => {
        this.recipes = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }


  searchByIngredients(textToSearch){
    this.searchService.findByIngredients(textToSearch)
    .subscribe(
      data => {
        this.recipes = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }


  searchByPage(page){
    this.searchService.findByPage(page)
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
