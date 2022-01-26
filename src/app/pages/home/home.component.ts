import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tomes: any[];
  cover: string;

  constructor(private CallApi: CallApiService) {
    this.tomes = [];
    this.cover = 'https://via.placeholder.com/250x350';
  }

  ngOnInit(): void {
    this.CallApi.getData().subscribe((data: any[]) => {
      console.log(data);
      this.tomes = data;
      console.log(this.tomes);
    });
    //console.log(this.cover)
  }
}
