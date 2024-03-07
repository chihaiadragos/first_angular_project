import {Component} from '@angular/core';
import {Item} from "../models/item.model";
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MatButton
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  itemsList: Array<Item> = [];

  constructor() {
    for (let index = 0; index < 5; index++) {
      let item: Item = new Item("title " + index, " description " + index, " imagineUrl " + index,  "index");
      this.itemsList.push(item);
    }
    console.log(this.itemsList);
  }
  onDelete(item: Item): void {
    console.log(item);
  }
}

