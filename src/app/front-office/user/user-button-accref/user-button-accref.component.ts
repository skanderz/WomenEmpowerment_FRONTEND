import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/servicesUser/token-storage.service';
import { UserService } from 'src/app/servicesUser/user.service';

@Component({
  selector: 'app-user-button-accref',
  templateUrl: './user-button-accref.component.html',
  styleUrls: ['./user-button-accref.component.css']
})
export class UserButtonAccrefComponent implements OnInit {

  
  constructor(private token: TokenStorageService, private userService : UserService ,private router:Router ) { }

 

  ngOnInit(): void {}
  @Input() id: number;
  @Output() editedEmitter = new EventEmitter<number>();
  state:boolean=true;

  
  onClickButtonACC(event:any) { event.target.disabled = true; 
      this.userService.AcceptInvitation(this.token.getUser().id, this.id);   }   

  onClickButtonREF(event:any) {  event.target.disabled = true;  this.userService.RefuseInvitation(this.token.getUser().id ,this.id);  }   


  setSaving(element, text){
    element.textContent = text;
    element.disabled = true;
  }






}