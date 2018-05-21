import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NoteComponent } from './note/note.component';
import { ReminderComponent } from './reminder/reminder.component';
import { CategoryComponent } from './category/category.component';
import { UserService } from './user/user.service';
import { ReminderService } from './reminder/reminder.service';
import { CategoryService } from './category/category.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'note', component: NoteComponent },
  { path: 'reminder', component: ReminderComponent},
  { path: 'category', component: CategoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NoteComponent,
    ReminderComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [UserService, ReminderService, CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }







