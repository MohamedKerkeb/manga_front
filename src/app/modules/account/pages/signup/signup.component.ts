import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public avatarArray: string[];
  public avatar: any;

  constructor(private authService: AuthService, private router: Router) {
    this.signupForm = new FormGroup({});
    this.avatarArray = [];
    this.avatar = {};
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      usernameFc: new FormControl(''),
      emailFc: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.pattern(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim),
      ]), // chercher une meilleure regex
      passwordFc: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      dobFc: new FormControl(''),
    });

    this.authService.fetchAvatar().subscribe((res: any[]) => {
      // console.log(res);
      this.avatarArray = res;
    });
    console.log(this.avatarArray);
  }
  public onSubmit(): void {
    console.log('value : ', this.signupForm.value);
    console.log('form : ', this.signupForm);
    const emailValue = this.signupForm.value['emailFc'];
    const passwordValue = this.signupForm.value['passwordFc'];
    const usernameValue = this.signupForm.value['usernameFc'];
    const dobvalue = this.signupForm.value['dobFc'];
    const user: User = {
      email: emailValue,
      password: passwordValue,
      username: usernameValue,
      date_of_birth: dobvalue,
      avatar: this.avatar.idAvatar,
      role: ['user'],
    };
    console.log(user);
    if (user.email !== '' && user.password !== '') {
      this.authService.signup(user).subscribe((resp) => {
        this.router.navigate(['account/signin']);
      });
    } else {
      // affichage erreur
    }
  }

  public onClick(evt: any) {
    console.log(evt);
    this.avatar = evt;
    console.log(this.avatar);
  }
}
