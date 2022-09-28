import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicesUser/user.service';
import { TokenStorageService } from '../../../servicesUser/token-storage.service';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-user-button-action-fo',
  templateUrl: './user-button-action-fo.component.html',
  styleUrls: ['./user-button-action-fo.component.css']
})



export class UserButtonActionFOComponent implements OnInit {

  constructor(private token: TokenStorageService ,private userService : UserService ,private router:Router ) { }
  //idu: any;
 

  ngOnInit(): void {}
  @Input() id: number;
  @Output() editedEmitter = new EventEmitter<number>();


  
  onClickButton(event:any) {  event.target.disabled = true; 
      this.userService.Invitation( this.id ,this.token.getUser().id);  }   

    // if ( this.action=="make_admin" ) { this.userService.assignAdmin(this.id); }


  setSaving(element, text){
    element.textContent = text;
    element.disabled = true;
  }


}