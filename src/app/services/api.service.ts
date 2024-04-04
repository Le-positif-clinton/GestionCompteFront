import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = "localhost:8081/"

  saveClient(client:any){
    return this.httpClient.post(this.baseUrl+'Client',client);
  }

  findAllClient(){
    return this.httpClient.get(this.baseUrl+"Client")
  }

  saveGestionnaire(gestionnaire:any){
    return this.httpClient.post(this.baseUrl+'Gestionnaire',gestionnaire);
  }

  findAllGestionnaire(){
    return this.httpClient.get(this.baseUrl+"Gestionnaire")
  }

  saveCompte(compte: any,type:string){
    if(type === "epargne"){
      return this.httpClient.post(this.baseUrl+'CompteEpargne',compte);
    }else{
      return this.httpClient.post(this.baseUrl+'CompteCourant',compte);
    }
  }

  findAllCompte(){
    return this.httpClient.get(this.baseUrl+"Compte")
  }

  findCompteById(id: number){
    return this.httpClient.get(this.baseUrl+"Compte/"+id)
  }
}
