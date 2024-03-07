import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";

export const routes: Routes = [
  {
    /*
    http://localhost:4200/home
     */
    path: "home",
    component: HomeComponent,
  },
  {
    /*
    http://localhost:4200/auth
  */
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "admin",
    component: DashboardComponent,
  },
  /*
   http://localhost:4200/users
  */
  {
    path: "user",
    component: UserComponent,
  }
  //tabel populat cu users
  //user : id, username, firstName, lastName, role
  //form sa fie populat initial cu niste informatii pt user
];
