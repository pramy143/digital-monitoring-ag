import { Component, OnInit } from '@angular/core';
import { CardsHealthcheckService } from '../../_services/cards-healthcheck.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Healthcheck } from '../../_model/healthcheck';


@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  apiService: Healthcheck;


  constructor(
    public cardsHealthcheckService: CardsHealthcheckService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cardsHealthcheckService.find(this.id).subscribe((data: Healthcheck)=>{
      this.apiService = data;
    });


  }
}
