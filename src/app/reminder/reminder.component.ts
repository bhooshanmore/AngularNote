import { Component, OnInit } from '@angular/core';
import { Reminder } from './Reminder';
import { ReminderService } from './reminder.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  reminders: Reminder[];

  constructor(private reminderService: ReminderService) { }

  ngOnInit() {
    this.reminderService
      .getUsers()
      .subscribe((data: Reminder[]) => {
        this.reminders = data;
      });
  }  

}
