import { Component } from '@angular/core';
import {AuthComponent} from "../auth/auth.component";
import {HomeComponent} from "../home/home.component";
import {AddUpdateItemComponent} from "../add-update-item/add-update-item.component";
import {Item} from "../models/item.model";
import {ItemService} from "../services/item.service";
import {ListItemsComponent} from "../list-items/list-items.component";
import {Router} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AuthComponent,
    HomeComponent,
    AddUpdateItemComponent,
    ListItemsComponent,
    MatCard,
    MatCardContent,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    MatIconButton,
    MatToolbar
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  item: Item = new Item("", "", "", "", "");
  constructor(private itemService: ItemService, private router: Router) {
    this.itemService.read();
  }

  onReceiveItemFromListItems(item: Item) {
    console.log("am primit item-ul");
    console.log(item);
    //salvam item-ul primit din list-item in clasa home.component
    this.item = item;
  }
  onDashboard(){
    this.router.navigate(["/", "admin"]);
  }
  onLogout() {
    this.router.navigate(["/", "auth"]);

  }
  onHome() {
    this.router.navigate(["/", "home"]);
  }
}
