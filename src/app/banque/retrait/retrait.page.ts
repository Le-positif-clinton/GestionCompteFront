import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {
  retrait:any = {compte:{numero:"",solde:0}}
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

  retirer(){
    this.retrait.compte = this.compte;  
    this.retrait.gestionnaire = this.utilsServ.getUser();
    // console.log("solde", this.retrait.compte.solde)
    if(this.retrait.montant <= 0){
      alert("Impossible d'effectuer le retrait d'un montant inferieur ou egale a zero. Verifiez le montant et recommencez! ")
    }else{
      if(this.retrait.compte.solde < this.retrait.montant){
        alert("Le solde du compte "+this.retrait.compte.numero+" est insuffisant pour effectuer cette opperation! Verifier le solde et reessayer !")
      }else{
        this.apiSerV.saveRetrait(this.retrait).subscribe((rep:any)=>{
          alert("Retrait de "+this.retrait.montant+" effectuer dans le compte de "+this.compte.client.nom+ " avec success!");
          this.utilsServ.viderCompte();
          this.router.navigate(['transactions'])
        },((err:any)=>{
          console.log("erreurrr", err);
        }))
      }
    }
    
    
  }
}