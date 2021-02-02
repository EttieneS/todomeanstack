import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUsersComponent } from '../components/users/view-users/view-users.component';
import { AddUserComponent } from '../components/users/add-user/add-user.component';
import { EditUserComponent } from '../components/users/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ViewUsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/edit/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
