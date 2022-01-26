import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss'],
})
export class MangasComponent implements OnInit {
  detailManga: any;
  constructor(private callApi: CallApiService, private route: ActivatedRoute) {
    this.detailManga;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const mangaIdFromRoute = routeParams.get('id');

    this.callApi.getMangaById(mangaIdFromRoute).subscribe((reponse) => {
      this.detailManga = reponse;
      console.log(this.detailManga);
    });
  }
}
