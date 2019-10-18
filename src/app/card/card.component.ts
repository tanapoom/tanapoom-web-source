import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Fname: any;
  Lname: any;
  Age: any;
  Birthday: any;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getMypro().subscribe(
      (data: any) => {
        this.Fname = data.Fname;
        this.Lname = data.Lname;
        this.Age = data.Age;
        this.Birthday = data.Birthday;
      },
      error => {

      }
    );
  }

}
