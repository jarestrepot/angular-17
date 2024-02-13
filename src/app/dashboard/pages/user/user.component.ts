import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/request-response';
import { TitleComponent } from '@shared/components/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  #route = inject(ActivatedRoute);
  #userService = inject( UsersService );

  // public user = signal<User | undefined>( undefined );

  // Tener un observable y emitir una señal.
  public user = toSignal<User | undefined>(
    this.#route.params.pipe(
      switchMap( ({ id }) => this.#userService.getUserById( id ))
    )
  );

  public fullNameComputed = computed( () => `${this.user()!.first_name} ${this.user()!.last_name}`);

  public titleLabel = computed( () => {
    return ( this.user() ? this.fullNameComputed() : 'Loaded user data' );
  })

  constructor() {
    // this.#route.params.subscribe(({ id }) => { console.log(id); });
  }
}
