import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Users {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}
const ELEMENT_DATA: Users[] = [
  {id: 1, username: 'asd', firstName: 'Ion', lastName: 'Andreea', role: 'junior'},
  {id: 2, username: 'fsdf', firstName: 'Bogdan', lastName: 'Bogdan', role: 'junior'},
  {id: 3, username: 'cvbcv', firstName: 'Rosu', lastName: 'Leo', role: 'internship'},
  {id: 4, username: 'fsf', firstName: 'Micutu', lastName: 'Aran', role: 'senior'},
  {id: 5, username: 'das', firstName: 'Sercan', lastName: 'Mihai', role: 'CEO'},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-user',
  styleUrl: 'user.component.css',
  templateUrl: 'user.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class UserComponent {
  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'role'];
  dataSource = ELEMENT_DATA;
}
