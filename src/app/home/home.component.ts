import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'java64-home',
  standalone: true,
  imports: [
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButton, ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  itemForm: FormGroup;

  constructor(formBuilder:FormBuilder) {
    this.itemForm = formBuilder.group({
      title:["", Validators.required],
      description:["", Validators.required],
      imageUrl:["", Validators.required],
      price:["", Validators.required]
    });
  }
  onSave(): void {
    alert("Am dat save");
    if (this.itemForm.valid){
      console.log(this.itemForm.value);
      alert("Formularul este valid");
    } else {
      alert("Formularul este invalid");
    }
  }
}
