import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.page.html',
  styleUrls: ['./virement.page.scss'],
})
export class VirementPage implements OnInit {

  virement:any = {compte:{numero:""}}
  compte: any = {numero:"", compteCrediteur:""}

  constructor(
    private router: Router,
    private utilsServ: UtilsService,
    private apiSerV: ApiService
  ) { }

  ngOnInit() {
    this.compte = this.utilsServ.getCompte();
    this.utilsServ.viderOperation();
  }

  virer(){
    this.virement.gestionnaire = this.utilsServ.getUser();
    if(this.virement.montant <= 0){
      alert("Impossible d'effectuer le virement d'un montant inferieur ou egale a zero. Verifiez le montant et recommencez! ")
    }else{
      if(this.virement.compte.solde < this.virement.montant){
        alert("Le solde du compte "+this.virement.compte.numero+" est insuffisant pour effectuer cette opperation! Verifier le solde et reessayer !")
      }else{
        this.virement.compte.numero = this.compte.numero;  
        this.apiSerV.saveVirement(this.virement).subscribe((rep:any)=>{
        alert("virement de "+this.virement.montant+" effectuer dans le compte de "+this.compte.client.nom+ " vers le compte "+this.compte.compteCrediteur+ " avec success!");
        this.utilsServ.viderCompte();
        this.router.navigate(['transactions'])
        },((err:any)=>{
          console.log("erreurrr", err);
        }))
      }
    }
  }
}
