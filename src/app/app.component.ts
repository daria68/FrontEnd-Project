import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';

  constructor(public _registerService: RegisterService){}
}
