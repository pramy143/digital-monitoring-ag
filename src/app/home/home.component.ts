import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { CardsHealthcheckService } from '../_services/cards-healthcheck.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Healthcheck } from '../_model/healthCheck';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  apiUsersList: Healthcheck[] = [];
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;

  constructor(
    private userService: UserService,
    public cardsHealthcheckService: CardsHealthcheckService,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {


    this.getsUserControllerServices({ page: "0", size: "5" });
    this.isLoggedIn = !!this.tokenStorageService.getUser();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.userService.getPublicContent().subscribe(
        data => {
          this.content = data;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      );
    }
  }

  private getsUserControllerServices(request) {
      this.userService.getPublicContent()
      .subscribe(data => {
          this.apiUsersList = data['content'];
      }
      , error => {
          console.log(error.error.message);
      }
      );
  }

  /*deleteApiService(id:number){
      this.userService.delete(id)
      .subscribe(data => {
          this.apiUsersList = this.apiUsersList.filter(item => item.id !== id);
          console.log('Service deleted successfully!');
      }
      , error => {
          console.log(error.error.message);
      }
      );
  }*/

}
