import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private router: Router) {}

  gererClients(){
    this.router.navigate(["clients"])
  }

  gererComptes(){
    this.router.navigate(["comtes"])
  }

  gererGestionnaires(){
    this.router.navigate(["gestionnaires"])
  }

  transaction(){
    this.router.navigate(["transactions"])
  }

  deconnection(){
    this.router.navigate(["login"])
  }

  ngOnInit() {
  }

}
