import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  Api:string;
   signupform:FormGroup;
  constructor(
    private APiService:ApiService,
    private router:Router
  ) { }

  ngOnInit() {
    this.APiService.cast.subscribe(Api=> this.Api=Api),
    this.signupform= new FormGroup ({
      'user name': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.email),
      })
  }
  change(){
    console.log(this.signupform)
    this.router.navigate(['/signup'])

  }
}
