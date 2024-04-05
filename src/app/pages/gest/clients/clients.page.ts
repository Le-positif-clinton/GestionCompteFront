import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients: Array<any> = []

  constructor(
    private router: Router,
    private apiServ: ApiService
  ) { }

  ngOnInit() {
    this.apiServ.findAllClient().subscribe((data:any)=>{
      this.clients = data;
    }, (err)=>{
      console.log("erreur", err);
    })
  }

  nouveau(){
    this.router.navigate(['new-compte']);
  }

}
