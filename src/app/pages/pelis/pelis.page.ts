import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliService } from 'src/app/services/peli.service';
import { IPelis } from 'src/app/model/IPelis.interface';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  results: Observable<IPelis>;
  term: string='';
  type: string='';
  constructor(private peliService : PeliService) { }

  ngOnInit() {
  }

  searchChanged(e): void {
    this.results = this.peliService.searchMovies(this.term,this.type);

  }
}
