import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName ='';
  serverid=10;
  serverstatus='offline';
  allowednewserver= false;
  serverwhilecreation='No Server is Created';
  
getserverstatus(){
  return this.serverstatus;
}
onCreateServer(){
  this.serverwhilecreation = 'New Server is Created '+this.userName;
  
}
OnSearch(userName){
  this.serverwhilecreation = 'New Server is Created '+this.userName;
}

clearSearch(){
    this.userName = '';
  }

onUpdateServer(event:Event){
  this.userName = (<HTMLInputElement>event.target).value;
}

constructor() {
  setTimeout(() => {
    this.allowednewserver=true;
  }, 1000);
  }

  ngOnInit(): void {
  }

}
