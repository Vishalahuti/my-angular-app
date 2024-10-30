import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.mockService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
