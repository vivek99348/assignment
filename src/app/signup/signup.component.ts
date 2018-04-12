import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators ,FormControl} from '@angular/forms';

 @Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup

  constructor(
    private   frmbuilder:FormBuilder
             

  ) { }

  ngOnInit() {
    this.signupForm= this.frmbuilder.group({  
      fname:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],  
      lname:['',[Validators.required,Validators.maxLength(19)]],  
      Emailid:['',[Validators.required,Validators.email]],  
      userpassword:['',Validators.required]  
    
    })  
  }

}
