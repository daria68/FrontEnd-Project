import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public myForm!:FormGroup;
  constructor(private _service: RegisterService,private _router: Router, private formBuilder:FormBuilder) { }
  userr =new User();
  message='';
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email:["",[Validators.required, Validators.email]],
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      password:["", [Validators.required, Validators.minLength(5)]]
    })
  }
  register(){

    this._service.registerUserFromRemote(this.userr).subscribe(
      
      data =>{
        console.log("response recive");
        localStorage.setItem('token', JSON.stringify(data))
        this.message="Register successful";
        this._router.navigate(['/home']);
      },
      error =>{
        console.log("exception occured");
        this.message = error.error;
      }
      
    )
  }
}