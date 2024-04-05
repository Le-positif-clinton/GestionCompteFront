import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.page.html',
  styleUrls: ['./new-compte.page.scss'],
})
export class NewComptePage implements OnInit {

  clients: Array<any> = []

  compte: any = {"client":{"id":0}}
  type = "courant"

  constructor(
    private apiServ: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiServ.findAllClient().subscribe((clients: any)=>{
      this.clients = clients;
    }, (err)=>{
      console.log("erreur", err)
    })
  }

  enregistrer(){
    console.log("voici le compte", this.compte)
    this.apiServ.saveCompte(this.compte, this.type).subscribe((data)=>{
      alert("compte enregistrer avec succes!");
      this.router.navigate(['comptes']);
    },(err)=>{
      console.log("erreurr", err);
    })
  }

}
