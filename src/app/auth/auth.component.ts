import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";

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
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm: FormGroup;
  viewType: string = "login";

  constructor(formBuilder:FormBuilder, private authService: AuthService) {
    this.authForm = formBuilder.group({
      username:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
      confirmPassword:["", Validators.required]
    });
  }
  onSave(): void {
    alert("Data saved");
    if (this.authForm.valid){
      console.log(this.authForm.value);
      const body = this.authForm.value;
      this.authService.register(body).subscribe((response: any) => {
        console.log(response);
      });
    } else {
      alert("Form is invalid");
    }
  }
  onSetViewType(viewType: string) {
    console.log(viewType);
    this.viewType = viewType;
  }
}
