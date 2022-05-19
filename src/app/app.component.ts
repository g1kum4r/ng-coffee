import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoffeeService } from './coffee.service';
import { updateAction } from './ngrx/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-coffee';

  constructor(private coffeeService: CoffeeService, private coffeeStore: Store<{coffee: {}}>){}

  ngOnInit(): void {
    this.coffeeService.getCoffeeList().subscribe(o => {
      this.coffeeStore.dispatch(updateAction({
        pageNumber: 1, pageSize: 10, items: o, totalItems: o.length
      }))
    })    
  }
}
