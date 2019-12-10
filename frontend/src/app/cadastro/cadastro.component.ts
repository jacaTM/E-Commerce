import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from 'src/model/user';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  userForm: FormGroup;
  users: User[];
  submitted: boolean = false;
  constructor(private userService: UserService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'nome': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'senha': new FormControl(null, [Validators.required]),
      'senhaConfirma': new FormControl(null, [Validators.required]),
      'telefone': new FormControl(null, [Validators.required]),
      'endereco': new FormControl(null, [Validators.required])
    });
    this.userService.getAllUsers().subscribe(
      res =>{
        this.users = res;
      },
      err => console.error(err)
    )
  }
  get form() {
    return this.userForm.controls;
  }

  onSubmit(form: NgForm){
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].email == this.userForm.controls['email'].value){
        this.userForm.controls['email'].setErrors({ invalid: true });
        return;
      }
    }
    let aux = new User(this.userForm.controls['nome'].value,this.userForm.controls['senha'].value,this.userForm.controls['email'].value,this.userForm.controls['telefone'].value,this.userForm.controls['endereco'].value,false);
    this.userService.createUser(aux).subscribe();
    this.router.navigate(['/home']);
  }
}
