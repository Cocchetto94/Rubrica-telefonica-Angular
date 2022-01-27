import { PopularComponent } from './features/popular/popular.component';
import { ContactComponent } from './features/contact/contact.component';
import { PhonebookComponent } from './features/phonebook/phonebook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     {path: 'phonebook', component: PhonebookComponent},
     {path: 'contact', component: ContactComponent},
     {path: 'popular', component: PopularComponent},
     {path: '**', redirectTo: 'phonebook'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
