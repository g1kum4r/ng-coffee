import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './components/coffee-detail/coffee-detail.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'
import { coffeeReducer } from './ngrx/reducers';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeDetailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({coffee: coffeeReducer }),
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
