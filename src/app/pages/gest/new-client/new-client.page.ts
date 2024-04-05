import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {

  client:any = {};
  // compte: any = {"client":{"id":0}}

  constructor(
    private router: Router,
    private apiServ: ApiService
  ) { }

  ngOnInit() {
  }

  register(){
    this.apiServ.saveClient(this.client).subscribe((rep)=>{
      alert("Client enregistrer avec success!");
      this.router.navigate(['clients']);
    },(err)=>{
      console.log("erreurrr",err)
    })
  }

}
