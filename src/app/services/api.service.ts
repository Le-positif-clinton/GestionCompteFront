import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }
  baseUrl = "http://localhost:8081/"

  login(gestionnaire: any){
    return this.httpClient.post(this.baseUrl+"connection",gestionnaire);
  }

  saveClient(client:any){
    return this.httpClient.post(this.baseUrl+'client',client);
  }

  saveDepot(depot:any){
    return this.httpClient.post(this.baseUrl+'depot',depot);
  }

  saveRetrait(retrait:any){
    return this.httpClient.post(this.baseUrl+'retrait',retrait);
  }

  saveVirement(virement:any){
    return this.httpClient.post(this.baseUrl+'virement',virement);
  }


  findAllClient(){
    return this.httpClient.get(this.baseUrl+"client")
  }

  saveGestionnaire(gestionnaire:any){
    return this.httpClient.post(this.baseUrl+'gestionnaire',gestionnaire);
  }

  findAllGestionnaire(){
    return this.httpClient.get(this.baseUrl+"gestionnaire")
  }

  saveCompte(compte: any,type:string){
    if(type === "epargne"){
      return this.httpClient.post(this.baseUrl+'compteEpargne',compte);
    }else{
      return this.httpClient.post(this.baseUrl+'compteCourant',compte);
    }
  }
  // , this.httpOptions

  findAllCompte(){
    return this.httpClient.get(this.baseUrl+"compte")
  }
  findAllOperations(){
    return this.httpClient.get(this.baseUrl+"operation")
  }

  findCompteById(id: number){
    return this.httpClient.get(this.baseUrl+"compte/"+id)
  }
}
