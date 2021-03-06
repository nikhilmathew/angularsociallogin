import { Angular2SocialLoginService } from './../Services/login.service';
import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sub: any;
  user: any;
  constructor(private login: Angular2SocialLoginService,private router: Router) {

  }
  // logout(){
  //     this._auth.logout().subscribe(
  //       (data)=>{//return a boolean value.
  //         console.log(data);
  //         this.user=""
  //     } 
  //     )
  //   }

  ngOnInit() {
    this.login.callLoadScript()
  }

}
