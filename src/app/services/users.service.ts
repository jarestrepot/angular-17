import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/request-response';
import { State } from '@interfaces/state.interface';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #http = inject(HttpClient);

  // # para propiedades privadas, sirve para la transpilación del código
  #state = signal<State>({
    loading: true,
    users: [],
  });

  // Solo lectura
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);


  constructor() {
    this.#http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(
        delay(2000)
      )
      .subscribe({
        next: ({ data }: UsersResponse) => {
          this.#state.set({
            loading: false,
            users: data
          })
        },
        error: (error: Error) => console.error(error)
      })
  }


  getUserById(id: number): Observable<User> {
    return this.#http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(3000),
        map( ({ data }) => data  )
      )
  }


}
