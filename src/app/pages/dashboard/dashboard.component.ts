import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  public classNames:string = "btn btn-primary";

  userlogged = localStorage.getItem('token')
  userIsLogged:boolean = false;

  user: User = new User();

  constructor() { }
  @Input()
  parentData!: string;

  ngOnInit(): void {
    if (this.userlogged) {
      this.userIsLogged = true;
      this.user = JSON.parse(this.userlogged);
    } else{
      this.userIsLogged = false;
    }
  }

}
