import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-stu',
  templateUrl: './stu.component.html',
  styleUrls: ['./stu.component.scss']
})
export class StuComponent implements OnInit {

  school:any;
  university:any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMypro().subscribe(
      (data:any)=>{
        this.school=data.Stu.school;
        console.log(this.school);
        this.university=data.Stu.university;
        console.log(this.university);
      },
      error=>{

      }
    );
  }

}
