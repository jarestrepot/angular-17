import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule ],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public userService = inject(UsersService);

  constructor() {
    // this.userService.
  }
}
