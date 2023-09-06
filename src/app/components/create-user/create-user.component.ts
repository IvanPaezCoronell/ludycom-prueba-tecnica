import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  public userForm: FormGroup;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.userForm = this.formBuilder.group({
      name: [''],
      lastname: [''],
      age: [''],
      email: [''],
      cc: [undefined],
      salary: [undefined],
      state: [undefined],
    });
  }
  onSubmit() {
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['users']);
  }
}
