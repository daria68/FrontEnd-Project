import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public classNames:string = "btn btn-primary";
  userr = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
