import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/users.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, filter, finalize, catchError, tap, map } from 'rxjs/operators';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})

export class ViewUsersComponent implements OnInit {
  users: User[];
  //public users = [];
  currentUser = null;
  currentIndex = -1
  username = '';

  displayedColumns = ["username",
    "edit", "delete"];

  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.retrieveUsers();
  }

  retrieveUsers() {
    console.log("retrieve users");
    this.userService
    .getAll()
    .subscribe((data:any) => {
      console.log(data);
      this.dataSource.data = data;
      this.users = data.data;
    });
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }

  deleteUser(userid){
    this.userService.delete(userid).subscribe((data)=>{
      alert("successfully deleted");
    });
    location.reload();
    //return false;
  }

  editUser(userid){
    console.log("edit user bonobo");
  }
}
