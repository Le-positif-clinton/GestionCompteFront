import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gestionnaires',
  templateUrl: './gestionnaires.page.html',
  styleUrls: ['./gestionnaires.page.scss'],
})
export class GestionnairesPage implements OnInit {

  gestionnaires: Array<any> = []

  constructor(
    private router: Router,
    private apiServ: ApiService
  ) { }

  ngOnInit() {
    this.apiServ.findAllGestionnaire().subscribe((data:any)=>{
      this.gestionnaires = data;
    }, (err)=>{
      console.log("erreur", err);
    })
  }

  nouveau(){
    this.router.navigate(['new-gestionnaire']);
  }

}