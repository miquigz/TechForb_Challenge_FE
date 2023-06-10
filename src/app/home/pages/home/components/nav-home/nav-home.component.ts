import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss']
})
export class NavHomeComponent {

  user:Observable<User>;

  constructor(userService:UserService) {
    this.user = userService.getUserState();
  }

}
