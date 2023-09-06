import { UserService } from './../../user.service';
import { User } from './../../user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  Users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.Users = res.map((el) => {
        return {
          id: el.payload.doc.id,
          ...(el.payload.doc.data() as User),
        };
      });
    });
  }

  deleteUser = (user) => this.userService.deleteUser(user);
}
