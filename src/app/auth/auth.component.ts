import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardContent,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm: FormGroup;

  constructor(formBuilder:FormBuilder) {
    this.authForm = formBuilder.group({
      username:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
      confirmPassword:["", Validators.required]
    });
  }
  onSave(): void {
    alert("Am dat save");
    if (this.authForm.valid){
      console.log(this.authForm.value);
      alert("Formularul este valid");
    } else {
      alert("Formularul este invalid");
    }
  }
}
