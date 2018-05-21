import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReminderService {
    constructor(private http: HttpClient) { }
    url = 'http://localhost:4000';
    getUsers() {
        return this
            .http
            .get(`${this.url}/reminders`);
    }
}