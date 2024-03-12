import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ListItemsComponent} from "../list-items/list-items.component";
import {ItemService} from "../services/item.service";
import {Item} from "../models/item.model";
import {AddUpdateItemComponent} from "../add-update-item/add-update-item.component";
import {AuthComponent} from "../auth/auth.component";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";

@Component({
  selector: 'java64-home',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButton, ReactiveFormsModule, ListItemsComponent, AddUpdateItemComponent, AuthComponent, MatDrawerContainer, MatDrawer
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private itemService: ItemService) {
    this.itemService.read();
  }
}
