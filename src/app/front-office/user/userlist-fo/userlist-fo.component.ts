import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/servicesUser/token-storage.service';
import { UserService } from 'src/app/servicesUser/user.service';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-userlist-fo',
  templateUrl: './userlist-fo.component.html',
  styleUrls: ['./userlist-fo.component.css']
})
export class UserlistFOComponent implements OnInit {

  users: User[] = [];
  // currentTutorial: User = {}; 
   currentIndex = -1;
   page = 1;
   count = 0;
   pageSize = 5;
   pageSizes = [5, 7, 10]; 
  isUidPresent: false;
  @Output() action: string;
 
   constructor(private token: TokenStorageService,  private userService : UserService   ,private router:Router ) { }
  

   

   ngOnInit(): void {  this.retrieveUsers();  }
   refreshUsers($event): void {  this.retrieveUsers(); }

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
 


