import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';
import { Page } from 'src/app/models/page';
import { selectCoffeeAction, updateAction } from 'src/app/ngrx/reducers';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  page = new Page<Coffee>();
  items: Coffee[] = []
  totalPages = 0

  constructor(private coffeeStore: Store<{coffee: Page<Coffee>}>, private router: Router) { }

  ngOnInit(): void {
    this.coffeeStore.select('coffee').forEach(p => this.loadPage(p))
  }

  loadPage(page: Page<Coffee>){
    this.page = { ...page };
    this.items = this.page.items.slice((this.page.pageNumber-1) * this.page.pageSize, this.page.pageNumber * this.page.pageSize)
    this.totalPages = Math.ceil(this.page.totalItems / this.page.pageSize)
  }

  selectCoffee(c: Coffee){
    this.coffeeStore.dispatch(selectCoffeeAction(c))
    this.router.navigate(['/detail'])
  }

  pageChanged(e: any){
    this.coffeeStore.dispatch(updateAction({
      ...this.page, 
    }))
  }

  updatePageSize(){
    this.coffeeStore.dispatch(updateAction({
      ...this.page
    }))
  }
}
