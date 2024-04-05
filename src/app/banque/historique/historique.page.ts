import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {

  operations: Array<any> = [];
  private operationsRecherche: Array<any> = [];
  private compte: any = {}

  constructor(

    private router: Router,
    private utilsServ: UtilsService,
    private apiServ: ApiService
  ) { }

  ngOnInit() {
    this.compte = this.utilsServ.getCompte();
    this.apiServ.findAllOperations().subscribe((data:any)=>{
      // this.operations = data;
      this.operations = data.filter((operation:any) => operation.compte.id == this.compte.id);
      this.operationsRecherche = data;
      console.log("operations",data)
    }, (err)=>{
      console.log("erreur", err);
    }) 

    console.log("compte",this.compte )
    console.log("operations",this.operations )
  }

  dateF(date: any){
    let dateF = new Date(date);
    return date.toLocaleString(); 
  }

  onSearchChange(ev: any){
    console.log(ev);

    let recherche: string = ev.detail.value; 
    
    this.operations = this.operationsRecherche.filter(operation =>{
      let txt_search = operation.client.id
      return (txt_search.toLowerCase().indexOf(recherche.toLowerCase()) > -1) || (txt_search.toLowerCase().indexOf(recherche.toLowerCase()) > -1);

    }); 

  }

}
