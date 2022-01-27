import { Users } from './../../model/users';
import { RubricaService } from './../../service/rubrica.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {


  favoritesContact: Users[] = [];


  constructor(private RubricaService: RubricaService) { }

  // GET USER
  ngOnInit(): void {
    this.RubricaService.getAllUsers()
      .subscribe((result: Users[]) => {
        this.favoritesContact = result.filter(pop => pop.isFavorite);
      });
  }
  // REMOVE FAVORITES FROM POPULAR
  remFav(user: Users) {
    user.isFavorite = !user.isFavorite;
    this.RubricaService.removeFavorite(user)
      .subscribe((result: Users) => {
        const index = this.favoritesContact.findIndex(user => user.id === result.id);
        this.favoritesContact.splice(index, 1);
      });
  }
}
