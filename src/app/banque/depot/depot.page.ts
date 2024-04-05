import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {

  depot:any = {compte:{numero:""}}
  compte: any = {numero:""}

  constructor(
    private router: Router,
    private utilsServ: UtilsService,
    private apiSerV: ApiService
  ) { }

  ngOnInit() {
    this.compte = this.utilsServ.getCompte();
    this.utilsServ.viderOperation();
  }

  deposer(){
    if(this.depot.montant <= 0){
      alert("Impossible d'effectuer le depot d'un montant inferieur ou egale a zero. Verifiez le montant et recommencez! ")
    }else{
      this.depot.gestionnaire = this.utilsServ.getUser();
      this.depot.compte.numero = this.compte.numero;  
      this.apiSerV.saveDepot(this.depot).subscribe((rep:any)=>{
      alert("Depot de "+this.depot.montant+" effectuer dans le compte de "+this.compte.client.nom+ " avec success!");
      this.utilsServ.viderCompte();
      this.router.navigate(['transactions'])
      },((err:any)=>{
        console.log("erreurrr", err);
      }));
    }
    
  }
}
