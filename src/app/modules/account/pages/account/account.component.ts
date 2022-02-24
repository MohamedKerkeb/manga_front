import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUserid()
  }

}
