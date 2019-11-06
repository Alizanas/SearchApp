import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild("sidebar", {static: false}) sidebar: ElementRef;
  activeMenu: Boolean = false;


  actionMenu() {
    this.activeMenu = !this.activeMenu;
  }

}

