import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SafePipe } from './_utils/safe.pipe';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlphabetComponent,
    SafePipe,
    CatalogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
