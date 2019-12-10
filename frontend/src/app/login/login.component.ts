import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { User } from 'src/model/user';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  users: User[];

  constructor(private userService: UserService, private router: Router, private loginService: LoginService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['',Validators.required],
      'senha': ['',Validators.required]
    });
    this.userService.getAllUsers().subscribe(
        res =>{
          this.users = res;
        },
        err => console.error(err)
    )
  }
  get form() {
    return this.loginForm.controls;
  }
  onSubmit(form: NgForm){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    let flag=false;
    for(let i=0; i<this.users.length;i++){
      if(this.users[i].email==this.loginForm.controls['email'].value && this.users[i].senha == this.loginForm.controls['senha'].value){
        this.loginService.user=this.users[i];
        this.loginService.isLogged=true;
        this.loginService.isAdmin=this.users[i].admin;
        flag=true;
        this.router.navigate(['/home']);
      }
    }
    if(flag==false){
      this.loginForm.controls['email'].setErrors({ invalid: true });
      this.loginForm.controls['senha'].setErrors({ invalid: true });
    }

  }
}
