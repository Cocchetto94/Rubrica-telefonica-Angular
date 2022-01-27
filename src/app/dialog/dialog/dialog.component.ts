import { Users } from 'src/app/model/users';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  name: string = '';
  surname: string = '';
  number: string = '';
  photo = 'https://picsum.photos/200/300';
  image = 'https://picsum.photos/200/300';

  editUser: Users = new Users();
  delUser: Users = new Users();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) {

    // OPEN DIALOG
    console.log('apertura modale: ', data);
    this.editUser = data.originalUser;


    this.delUser = data.user;

    if (this.editUser) {
      // visualizzo i valori sull'input di modifica
      this.name = this.editUser.name;
      this.surname = this.editUser.surname;
      this.number = this.editUser.number;
    }

  }
  ngOnInit(): void { }

  confirm(name: string, surname: string, number: string, photo: string, image: string) {

    const addUser = new Users();
    const updateUser = this.editUser;

    if (this.data.function === 'add') {

      addUser.name = name;
      addUser.surname = surname;
      addUser.number = number;
      addUser.photo = photo;
      addUser.image = image;

      this.dialogRef.close({ addUser });
    }
    else  {
      // cambio i valori delle proprietà selezionate
      updateUser.name = this.name;
      updateUser.surname = this.surname;
      updateUser.number = this.number;

      this.dialogRef.close({ data: updateUser })
    }
   
      
    
  }

  onDelete() {
    console.log('DELETE USER', this.delUser);
    this.dialogRef.close({ data: this.delUser });
  }
  // CLOSE DIALOG
  close() {
    this.dialogRef.close();
  }
}

