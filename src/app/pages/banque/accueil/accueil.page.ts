import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(
    private router: Router,
    private utiliServ: UtilsService
    ) {}

  gererClients(){
    this.router.navigate(["clients"])
  }

  gererComptes(){
    this.router.navigate(["comptes"])
  }

  gererGestionnaires(){
    this.router.navigate(["gestionnaires"])
  }

  transaction(){
    this.router.navigate(["transactions"])
  }

  deconnection(){
    this.router.navigate(["login"]);
    this.utiliServ.viderUser();
  }

  ngOnInit() {
  }

}
