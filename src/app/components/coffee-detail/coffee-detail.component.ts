import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  coffee?: Coffee

  constructor(private coffeeStore: Store<{coffee: Page<Coffee>}>) {}

  ngOnInit(): void {
    this.coffeeStore.select('coffee').subscribe(page => {
      console.log(page)
      this.coffee = page.selectedItem
    })
  }

}
