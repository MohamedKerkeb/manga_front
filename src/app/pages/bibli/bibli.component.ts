import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-bibli',
  templateUrl: './bibli.component.html',
  styleUrls: ['./bibli.component.scss']
})
export class BibliComponent implements OnInit {

  constructor(private callApi: CallApiService) { }

  ngOnInit(): void {
    this.callApi.getTomeOfUser().subscribe((data: any[]) => {
      console.log(data)
    })
  }

}
