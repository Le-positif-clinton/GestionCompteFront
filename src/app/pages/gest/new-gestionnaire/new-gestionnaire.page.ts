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

  gestionnaire:any

  loading!: HTMLIonLoadingElement;

  selectedFile: any;

  boutiques!: Observable<any[]>;

  constructor(
    private apiServ: ApiService,
    private loadingController: LoadingController,
    private firebaseServ: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.boutiques = this.apiServ.findAllBoutiques();
  }

  async register(){

    await this.presentLoading();
    // this.gestionnaire.image = await this.firebaseServ.saveImageUser(this.gestionnaire.email, this.selectedFile)
    

    await this.apiServ.saveGestionnaire(this.gestionnaire).subscribe(rep=>{
      this.loading.dismiss();
      this.router.navigate(['lgestionnaire']);
    },err=>{
      console.log("erreur lors de l'enregistrement du gestionnaire", err);
      alert("erreur lors de l'enregistrement du gestionnaire");
    })
  
  }

  chooseFile (event:any) {
    this.selectedFile = event.target.files
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Veuillez patienter pendant l'enregistrement de l'image..."
    });
    return this.loading.present();
  }

}
