import { Users } from './../model/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  constructor(private http: HttpClient) { }

  // GET
  getAllUsers() {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  // DELETE
  deleteUser(user: Users) {
    return this.http.delete(`http://localhost:3000/users/${user.id}`);
  }

  // ADD FAVORITE USER
  favoriteUser(user: Users) {
    return this.http.patch<Users>(`http://localhost:3000/users/${user.id}`, user);
  }

  // REMOVE FAVORITE USER
  removeFavorite(user: Users) {
    return this.http.patch<Users>(`http://localhost:3000/users/${user.id}`, user);
  }

  // EDIT USER
  editUser(user: Users) {
    console.log(user);
    return this.http.patch<Users>(`http://localhost:3000/users/${user.id}`, user);
  }

  // ADD USER
  addUser(user: Users) {
    return this.http.post<Users>(`http://localhost:3000/users`, user)
  }
}

