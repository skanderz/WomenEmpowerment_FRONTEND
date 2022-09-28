import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/servicesUser/token-storage.service';
import { UserService } from 'src/app/servicesUser/user.service';
import { User } from 'src/Model/User';




@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})



export class RequestListComponent implements OnInit {

 

  users: User[] = [];
  // currentTutorial: User = {}; 
   currentIndex = -1;
   page = 1;
   count = 0;
   pageSize = 5;
   pageSizes = [5, 7, 10];
   

 
  isUidPresent: false;
 
  @Output() action: string;
 
   constructor( private token: TokenStorageService, private userService : UserService   ,private router:Router ) { }
   currentUser: User[];
   id: number;



   ngOnInit(): void { this.GetInvitation();  } 

   refreshUsers($event): void {  this.GetInvitation(); }


      
   GetInvitation(): void {
    this.userService.getInvitationList(this.token.getUser().id).subscribe(
     response => {
     this.currentUser = response;
     console.log(response);   });
 }




   getRequestParams(page: any, pageSize: any ): any {
     let params: any = {};
     if (page) {  params[`page`] = page - 1;  }
     if (pageSize) {  params[`size`] = pageSize;  }
     return params;   }  
 


/*
     retrieveUsers(): void {
      this.userService.getInvitationList(this.token.getUser().iduser).subscribe(
       response => {
    //   const { users } = response; 
      this.users = users;      console.log(response);   });} */
 
/*
   handlePageChange(event: number): void { this.page = event;  this.retrieveUsers(); }
   handlePageSizeChange(event: any): void {  this.pageSize = event.target.value; this.page = 1; this.retrieveUsers(); }
 
   searchTitle(): void { this.page = 1;  this.retrieveUsers(); }
   setActiveTutorial(tutorial: User, index: number): void{} 
 */

 
 
 }

