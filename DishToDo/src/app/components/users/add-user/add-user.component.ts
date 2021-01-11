import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // user = {
  //   username: ''
  // }

  user = {
    username: ''
  };

  public userdetailsForm: FormGroup;
  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userdetailsForm = new FormGroup({
      username: new FormControl('', [Validators.maxLength(60)])
    });
  }

  addUser(user) {
    const data =  {
      username: user.username
    }
    console.log("bonobo");
    console.log(data + "data object");
    console.log(data.username + " data");
    console.log(user + " user");
    // this.userService.create(data)
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

}
