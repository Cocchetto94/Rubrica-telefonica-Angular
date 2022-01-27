import { DialogComponent } from './../../dialog/dialog/dialog.component';
import { Users } from './../../model/users';
import { RubricaService } from './../../service/rubrica.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  users: Users[] = [];

  constructor(private RubricaService: RubricaService, public dialog: MatDialog) { }

  // GET USER
  ngOnInit(): void {
    this.RubricaService.getAllUsers()
      .subscribe((result: Users[]) => {
        this.users = result
      });
  }

  // DIALOG DELETE
  openDialog(user: Users) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        user, 
        function: 'delete',
       
      } 
    });
    dialogRef.afterClosed()
      .subscribe(res => {
        if (res?.data) {
          const userDelete = res.data;
          this.RubricaService.deleteUser(userDelete)
            .subscribe(() => {
              const index = this.users.indexOf(user);
              this.users.splice(index, 1);
            });
        }
      })
  }
}
