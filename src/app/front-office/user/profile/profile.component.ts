import { UserService } from './../../../servicesUser/user.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenStorageService } from '../../../servicesUser/token-storage.service';
import { User } from 'src/Model/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  //id: any;
  currentUser: User;
  redirectUrl: '/home/user/login';
  users: User[] = [];
  // currentTutorial: User = {}; 
   currentIndex = -1;
   page = 1;
   count = 0;
   pageSize = 5;
   pageSizes = [5, 7, 10];
   isUidPresent: false;
   @Output() action: string;
   currentUsers: User[];
   FriendUsers: User[];

  constructor(private token: TokenStorageService  ,public router: Router   ,private userService : UserService){}
  state:boolean=true;
   

  ngOnInit(): void { this.userService.getUser(this.token.getUser().id).subscribe(data => { this.currentUser = data ;  });
  this.retrieveUsers();   this.GetInvitation();  this.GetFriends(); } 



 GetInvitation(): void {
    this.userService.getInvitationList(this.token.getUser().id).subscribe(
    response => {   this.currentUsers = response;  console.log(response);   });   }


 GetFriends(): void {
     this.userService.getFriendList(this.token.getUser().id).subscribe(
     response => {   this.FriendUsers = response;  console.log(response);   });   }



/************** SUGGESTION-LIST************/
   refreshUsers($event): void {  this.retrieveUsers(); this.GetInvitation();  }

   @Input() id: number;
   @Output() editedEmitter = new EventEmitter<number>();


   
   getRequestParams(page: number, pageSize: number ): any {
     let params: any = {};
     if (page) {  params[`page`] = page - 1;  }
     if (pageSize) {  params[`size`] = pageSize;  }
     return params;   }
 

   retrieveUsers(): void {
     const params = this.getRequestParams(this.page, this.pageSize );
     
     this.userService.getAll(params).subscribe(
       response => {
       const { users, totalItems } = response; 
       this.users = users;      this.count = totalItems;     console.log(response); },
       error => { console.log(error);  });
   }
 

   handlePageChange(event: number): void { this.page = event;  this.retrieveUsers(); }
   handlePageSizeChange(event: any): void {  this.pageSize = event.target.value; this.page = 1; this.retrieveUsers(); }
 
   searchTitle(): void { this.page = 1;  this.retrieveUsers(); }
   setActiveTutorial(tutorial: User, index: number): void { } 
 
  


}


