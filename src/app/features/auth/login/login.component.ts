import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/users/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData:any;
  constructor(private user: UserService,private router:Router) {}

  ngOnInit() {
    this.user.currentUserData.subscribe((userData:any) => (this.userData = userData));
  }

  changeData(event:any) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data:any) {
    if(data.email==='test@gmail.com' && data.password ==='Test@123'){
      this.router.navigate(['/dashboard'])
    }
    console.log(data)
    //this.user.changeData(data);
  }
}
