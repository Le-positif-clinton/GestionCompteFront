import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  gestionnaire:any = {motDePasse:"",nom:""};

  constructor(
    private apiServ: ApiService,
    private loadingController: LoadingController,
    private router: Router,
    private utiliServ: UtilsService
  ) { }

  ngOnInit() {
  }

  login(){
    console.log("voici gest", this.gestionnaire)
    this.apiServ.login(this.gestionnaire).subscribe((rep:any)=>{
      if(this.gestionnaire.motDePasse == rep.motDePasse){
        alert("Bienvenu "+rep.nom+"!");
      this.router.navigate(['accueil']);
      }else{
        alert("Veuillez verifier votre email et ou mot de passe et reessayer !")
      }
      
    },(err)=>{
      console.log("erreur lors de la connection", err);
      alert("Veuillez verifier votre email et ou mot de passe et reessayer !")
    })
  }

  register(){
    this.apiServ.saveGestionnaire(this.gestionnaire).subscribe((rep)=>{
      alert("Gestionnaire enregistrer avec success!");
      this.router.navigate(['home']);
    },(err)=>{
      console.log("erreurrr",err)
    })
  }
  
}
