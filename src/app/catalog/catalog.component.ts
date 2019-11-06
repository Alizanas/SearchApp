import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../_models/Recipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input() public recipes: Recipe[];

  recipePreview: Recipe[];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content, recipe) {
    this.recipePreview = recipe;
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'});
  }

}
