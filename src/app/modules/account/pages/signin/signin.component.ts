import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public errorForm: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.errorForm = false;
  }

  ngOnInit(): void {}

  public onSubmit(submittedForm: any): void {
    console.log(submittedForm.form.value);
    const username = submittedForm.form.value['username'];
    const password = submittedForm.form.value['password'];
    if (username !== '' && password !== '') {
      this.authService.signin(username, password).subscribe((resp) => {
        console.log('Component Page Signin: ', resp);
        this.router.navigate(['account/user']);
      });
    } else {
      // afficher une erreur à l'utilisateur
      this.errorForm = true;
    }
  }
}
