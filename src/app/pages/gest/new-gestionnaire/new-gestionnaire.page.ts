import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-new-gestionnaire',
  templateUrl: './new-gestionnaire.page.html',
  styleUrls: ['./new-gestionnaire.page.scss'],
})
export class NewGestionnairePage implements OnInit {

  gestionnaire:any = {};

  constructor(
    private apiServ: ApiService,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(){
    this.apiServ.saveGestionnaire(this.gestionnaire).subscribe((rep)=>{
      alert("Gestionnaire enregistrer avec success!");
      this.router.navigate(['gestionnaires']);
    },(err)=>{
      console.log("erreurrr",err)
    })
  }
  
}
