import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.page.html',
  styleUrls: ['./solde.page.scss'],
})
export class SoldePage implements OnInit {

  solde:any = {compte:{numero:""}}
  compte: any = {numero:""};
  date: Date = new Date();

  constructor(
    private router: Router,
    private utilsServ: UtilsService,
    private apiSerV: ApiService
  ) { }

  ngOnInit() {
    this.compte = this.utilsServ.getCompte();
    this.utilsServ.viderOperation();
  }

  historique(){
    // this.solde.compte.numero = this.compte.numero;  
    // this.apiSerV.savesolde(this.solde).subscribe((rep:any)=>{
    //   alert("solde de "+this.solde.montant+" effectuer dans le compte de "+this.compte.client.nom+ " avec success!");
      // this.utilsServ.viderCompte();
      this.router.navigate(['historique'])
    // },((err:any)=>{
    //   console.log("erreurrr", err);
    // }))
  }
}