import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  signupform:FormGroup;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
      this.signupform= new FormGroup({
            
             'email':new FormControl(null,Validators.email),
             'password': new FormControl('',Validators.required),
            

            //  'gender':new FormControl(null,Validators.required)
      });

  }
 
  // onsubmit(){
  //   console.log(this.signupform)
  // }
  change(){
    console.log(this.signupform)
    this.router.navigate(['/signin'])

  }
}
