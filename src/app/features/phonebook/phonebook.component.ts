import { Users } from 'src/app/model/users';
import { DialogComponent } from './../../dialog/dialog/dialog.component';
import { RubricaService } from './../../service/rubrica.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  users: Users[] = [];
  data: Users = new Users();
  user: Users = new Users();

  constructor(private RubricaService: RubricaService, public dialog: MatDialog) { }

  // GET USER
  ngOnInit(): void {
    this.RubricaService.getAllUsers()
      .subscribe((result: Users[]) => {
        this.users = result;
      });
  }
  // ADD NEW USER
  addDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        function: 'add',
        title: 'Add contact'
      }
    });
    dialogRef.afterClosed()
      .subscribe(res => {
        console.log('utente che sto aggiungendo', res);
        if (res) {
          const user = res.addUser;
          this.RubricaService.addUser(user)
            .subscribe(data => {
              console.log('data', data);
              this.users.push(data);
            });
        }
      });
  }

  // UPDATE CARD
  editDialog(originalUser: Users) {
    console.log('Sono entrato in editDialog con originalUser:', originalUser)
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        originalUser,
        function: 'edit',
        title: 'Edit contact'
      }
     
    });
    dialogRef.afterClosed()
      .subscribe(res => {
        console.log('result afterclose', res);
        if (res?.data) {
          const userEdited = res.data;
          console.log('user modificato dopo chiusura modale:', userEdited);
          this.RubricaService.editUser(userEdited)
            .subscribe(result => {
              console.log('response editUser:', result);
            })
        }
      })
  }

  // DIALOG DELETE
  openDialog(user: Users) {
    console.log('user pre delete', this.users);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        user, 
        function: 'delete',
       
      } 
    });
    dialogRef.afterClosed()
      .subscribe(res => {
        console.log('stampo res delete', res);
        if (res?.data) {
          const userDelete = res.data;
          this.RubricaService.deleteUser(userDelete)
            .subscribe(() => {
              const index = this.users.indexOf(user);
              this.users.splice(index, 1);
            });
        }
      });
    console.log('user post delete', this.users);
  }

  // ADD FAVORITE USER
  addFavorite(user: Users) {
    user.isFavorite = !user.isFavorite;
    this.RubricaService.favoriteUser(user)
      .subscribe((result: Users) => {
        const index = this.users.findIndex(d => d.id === user.id);
        this.users[index] = result;
      })
    console.log(user.isFavorite);
  }

  // REMOVE FAVORITE USER
  remFav(user: Users) {
    user.isFavorite = !user.isFavorite;
    this.RubricaService.removeFavorite(user)
      .subscribe(result => {
        const index = this.users.findIndex(d => d.id === user.id);
        this.users[index] = result;
      })
    console.log(user.isFavorite);
  }
}