import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.page.html',
  styleUrls: ['./comptes.page.scss'],
})
export class ComptesPage implements OnInit {

  comptes: Array<any> = [];
  private comptesRecherche: Array<any> = []

  constructor(
    private apiServ: ApiService,
    private router: Router,
    private utilsServ: UtilsService
  ) { }

  operation = ""
  ngOnInit() {
    this.apiServ.findAllCompte().subscribe((data:any)=>{
      this.comptes = data;
      this.comptesRecherche = data;
    }, (err)=>{
      console.log("erreur", err);
    })

    this.operation = this.utilsServ.getOperation();
  }

  nouveau(){
    this.router.navigate(['new-compte']);
  }

  compteS(compte: any){

    this.utilsServ.setCompte(compte);
    
    if(this.operation === "depot"){
      this.router.navigate(['depot']);
    }
    if(this.operation === "retrait"){
      this.router.navigate(['retrait']);
    }
    if(this.operation === "virement"){
      this.router.navigate(['virement']);
    }
    if(this.operation === "solde"){
      this.router.navigate(['solde']);
    }

  }

  onSearchChange(ev: any){
    console.log(ev);

    let recherche: string = ev.detail.value; 
    
    this.comptes = this.comptesRecherche.filter(compte =>{
      let txt_search = compte.numero
      return (txt_search.toLowerCase().indexOf(recherche.toLowerCase()) > -1) || (txt_search.toLowerCase().indexOf(recherche.toLowerCase()) > -1);

    }); 

  }
}
