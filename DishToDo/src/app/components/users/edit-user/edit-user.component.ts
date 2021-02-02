import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  currentUser = null;
  public userdetailsForm: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));

    this.userdetailsForm = new FormGroup({
      username: new FormControl('', [Validators.maxLength(60)])
    });
  }


  getUser(id): void {
    alert(id);
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  updateUser(userdetailsForm){

  }
}
