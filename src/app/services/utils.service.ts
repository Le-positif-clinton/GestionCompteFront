import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  private operation = "";
  private compte:any = {}
  private user: any = {id:0}

  setOperation(nom:string){
    this.operation = nom;
  }

  setUser(user:any){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  viderUser(){
    this.user = {};
  }

  getOperation(){
    return this.operation;
  }

  viderOperation(){
    this.operation = "";
  }

  setCompte(compte: any){
    this.compte = compte;
  }

  getCompte(){
    return this.compte;
  }

  viderCompte(){
    this.compte = {};
  }
}
