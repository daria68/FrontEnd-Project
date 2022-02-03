import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';

  enterName ="";
  parentData = "";
  TransferData(){
    this.parentData = this.enterName;
  }

  constructor(public _registerService: RegisterService){}
  
}
