import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

name='ragheb';
pay='tunisie';
statut="activé";

public userList:any =[];

  constructor(private route:Router,public userservice:UserService) { }

  ngOnInit(): void {

    this.getuser();
    console.log(this.getuser());
    console.log(this.userList);
  }

getStatut()
 {

return this.statut;

}

affichemessage(){

  console.log("ragheb");
}

gotoresister(){

  this.route.navigate(["/register"]);
}


getuser(){

  this.userservice.getuserfromplaceholder().subscribe(
    result =>{
      this.userList=result;
      console.log(this.userList);
  
    }
    
  )
  
      return this.userList;
}


}
