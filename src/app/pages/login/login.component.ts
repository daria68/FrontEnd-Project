import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userr = new User();
  message = '';
  constructor(private _service : RegisterService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.userr).subscribe(
      data => {
        console.log("Response was received");
        localStorage.setItem('token',  JSON.stringify(data))
        this._router.navigate(['/home'])
      },
      error => {
        console.log("Exception has occured");
        this.message="Wrong email or password, please Retry!";
    }     
    )
  }

}
