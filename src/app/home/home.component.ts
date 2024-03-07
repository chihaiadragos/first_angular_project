import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ListItemsComponent} from "../list-items/list-items.component";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'java64-home',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButton, ReactiveFormsModule, ListItemsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  itemForm: FormGroup;

  constructor(formBuilder:FormBuilder, private itemService: ItemService) {
    this.itemForm = formBuilder.group({
      title:["", Validators.required],
      description:["", Validators.required],
      imageUrl:["", Validators.required],
      price:["", Validators.required]
    });
    this.itemService.read();
  }
  onSave() {
    alert("Am dat save");
    if (this.itemForm.valid){
      console.log(this.itemForm.value);
      this.itemService.create(this.itemForm.value).subscribe((response: any) => {
        console.log(response);
        alert(response.message)
        this.itemService.read();//dupa fiecare actiune de create, edit, delete, apelam read() pentru a actualiza informatiile din baza de date
      });
    } else {
      alert("Formularul este invalid");
    }
  }
}
