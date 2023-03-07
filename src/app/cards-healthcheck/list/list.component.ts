import { Component, OnInit } from '@angular/core';

import { CardsHealthcheckService } from '../../_services/cards-healthcheck.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Healthcheck } from '../../_model/healthCheck';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  apiServicesList: Healthcheck[] = [];
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;

    constructor(
      public cardsHealthcheckService: CardsHealthcheckService,
      private tokenStorageService: TokenStorageService
    ) {
    }

    ngOnInit(): void {
        this.getsApiServices({ page: "0", size: "15" });
        this.isLoggedIn = !!this.tokenStorageService.getUser();

        if (this.isLoggedIn) {
          const user = this.tokenStorageService.getUser();
          this.roles = user.roles;

          this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
          this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
        }
    }

    private getsApiServices(request) {
        this.cardsHealthcheckService.getAll(request)
        .subscribe(data => {
            this.apiServicesList = data['content'];
        }
        , error => {
            console.log(error.error.message);
        }
        );
    }

    deleteApiService(id:number){
        this.cardsHealthcheckService.delete(id)
        .subscribe(data => {
            this.apiServicesList = this.apiServicesList.filter(item => item.id !== id);
            console.log('Service deleted successfully!');
        }
        , error => {
            console.log(error.error.message);
        }
        );
    }
}
