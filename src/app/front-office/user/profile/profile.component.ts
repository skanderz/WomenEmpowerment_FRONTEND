import { UserService } from './../../../servicesUser/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../servicesUser/token-storage.service';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  redirectUrl: '/home/user/login';

  constructor(private token: TokenStorageService,public router: Router,private userService : UserService) { }

   ngOnInit(): void { this.userService.getUser(this.token.getUser().id).subscribe(data => { this.currentUser = data ; 
console.log(this.currentUser); }) ; } 


}