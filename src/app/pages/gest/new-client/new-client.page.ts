import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {

  client:any

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
    // this.client.image = await this.firebaseServ.saveImageUser(this.client.email, this.selectedFile)
    

    await this.apiServ.saveClient(this.client).subscribe(rep=>{
      this.loading.dismiss();
      this.router.navigate(['lclient']);
    },err=>{
      console.log("erreur lors de l'enregistrement du client", err);
      alert("erreur lors de l'enregistrement du client");
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
