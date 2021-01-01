import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  usernameControl = new FormControl('');

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
  }

  addUser() {
    console.log("add user");
    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
