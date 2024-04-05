import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(
    private router: Router,
    private utilsServ: UtilsService
  ) { }

  ngOnInit() {
  }

  depot(){
    this.utilsServ.setOperation("depot");
    this.router.navigate(['comptes']);
  }

  retrait(){
    this.utilsServ.setOperation("retrait");
    this.router.navigate(['comptes']);
  }

  virement(){
    this.utilsServ.setOperation("virement");
    this.router.navigate(['comptes']);
  }

  solde(){
    this.utilsServ.setOperation("solde");
    this.router.navigate(['comptes']);
  }

}
