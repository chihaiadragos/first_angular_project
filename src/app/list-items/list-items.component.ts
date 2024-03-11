import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../models/item.model";
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MatButton,
    NgIf
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  //@Output ne ajuta sa definim un eveniment prin care trimitem datele din list-items in pagina de home/dashboard
  @Output() updateDataEvent: EventEmitter<Item> = new EventEmitter<Item>();
  itemsList: Array<Item> = [];
  @Input({transform: booleanAttribute, alias: "showBuyButton"}) showBuyButton: boolean = true;//ascunde butoanele de update si delete cand suntem pe pagina de home si afiseaza butonul de buy

  constructor(private itemService: ItemService) {
    itemService.getItemsList().subscribe((itemsListFromService: Array<Item>)=> {
      console.log("new data")
      this.itemsList = itemsListFromService;
    })
  }
  onDelete(item: Item): void {
    console.log(item);
    this.itemService.delete(item.id).subscribe((response: any)=>{
      console.log(response);
      this.itemService.read();
    })
  }
  onUpdate(item: Item) {
    console.log(item);
    //metoda emit() trimite item-ul in pagina de home/dashboard, apeleaza evenimentul updateDate
    this.updateDataEvent.emit(item);
  }

  onBuy(item: Item) {
    console.log(item);
  }
}

