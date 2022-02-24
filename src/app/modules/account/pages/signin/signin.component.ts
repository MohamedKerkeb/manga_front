import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  public errorForm: boolean;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private router: Router,
              private tokenStrorage: TokenService) {
    this.errorForm = false;
  }

  ngOnInit(): void {
    if(this.tokenStrorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStrorage.getUserid().roles;
    }
  }

  public onSubmit(submittedForm: any): void {
    console.log(submittedForm.form.value);
    const username = submittedForm.form.value['username'];
    const password = submittedForm.form.value['password'];
    if (username !== '' && password !== '') {
      this.authService.signin(username, password).subscribe((resp) => {
        console.log('Component Page Signin: ', resp);
        this.tokenStrorage.saveToken(resp.accessToken)
        this.tokenStrorage.saveUser(resp)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStrorage.getUserid().roles;
        this.router.navigate(['account/user']);
      });
    } else {
      // afficher une erreur à l'utilisateur
      this.errorForm = true;
    }
  }
}
