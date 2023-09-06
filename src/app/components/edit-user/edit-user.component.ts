import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  public editForm: FormGroup;
  userRef: any;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      lastname: [''],
      age: [''],
      email: [''],
      cc: [undefined],
      salary: [undefined],
      state: [undefined],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((res) => {
      this.userRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.userRef.name],
        lastname: [this.userRef.lastname],
        age: [this.userRef.age],
        email: [this.userRef.email],
        cc: [this.userRef.cc],
        salary: [this.userRef.salary],
        state: [this.userRef.state],
      });
    });
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['users']);
  }
}
