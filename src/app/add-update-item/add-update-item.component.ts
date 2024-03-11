import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemService} from "../services/item.service";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Item} from "../models/item.model";

@Component({
  selector: 'app-add-update-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatCardContent,
    MatLabel,
    MatFormField,
    MatButton,
    MatInput
  ],
  templateUrl: './add-update-item.component.html',
  styleUrl: './add-update-item.component.css'
})
export class AddUpdateItemComponent implements OnChanges{
  @Input("selectedItem") selectedItem: Item = new Item("", "", "", "", "");
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private itemService: ItemService) {
    this.itemForm = formBuilder.group({
      id: [""],
      title: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required]
    });
    this.itemService.read();
  }

  onSave() {
    alert("Am dat save");
    if (this.itemForm.valid) {
      if (this.itemForm.value.id == "") {
        //daca formularul nu are id atunci facem create
        this.itemService.create(this.itemForm.value).subscribe((response: any) => {
          console.log(response);
          alert(response.message)
          this.itemService.read();//dupa fiecare actiune de create, edit, delete, apelam read() pentru a actualiza informatiile din baza de date
          this.resetForm();
        });
      } else {
        //daca formularul are id atunci facem update
        this.itemService.update(this.itemForm.value).subscribe((response: any) => {
          console.log(response);
          alert(response.message)
          this.itemService.read();//dupa fiecare actiune de create, edit, delete, apelam read() pentru a actualiza informatiile din baza de date
          this.resetForm();
        });
      }
    } else {
      alert("Formularul este invalid");
    }
  }
  //ngOnChanges() din interfata OnChanges se apeleaza atunci cand @Input definit mai sus isi schimba valoarea
  //ngOnChanges() se apeleaza automat. OBLIGATORIU TREBUIE sa implementam interfata OnChanges
  ngOnChanges(): void {
    console.log(this.selectedItem);
    this.itemForm = this.formBuilder.group({
      id: [this.selectedItem.id],
      title: [this.selectedItem.title, Validators.required],
      description: [this.selectedItem.description, Validators.required],
      imageUrl: [this.selectedItem.imageUrl, Validators.required],
      price: [this.selectedItem.price, Validators.required]
    });
  }
  resetForm(){
    this.itemForm = this.formBuilder.group({
      id: [""],
      title: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required]
    });
    this.selectedItem = new Item("", "", "", "", "");
  }
}
