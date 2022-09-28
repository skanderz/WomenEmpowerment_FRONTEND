import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/servicesUser/token-storage.service';
import { UserService } from 'src/app/servicesUser/user.service';

@Component({
  selector: 'app-user-button-retirer',
  templateUrl: './user-button-retirer.component.html',
  styleUrls: ['./user-button-retirer.component.css']
})
export class UserButtonRetirerComponent implements OnInit {

  constructor(private token: TokenStorageService ,private userService : UserService ,private router:Router ) { }
  //idu: any;
 

  ngOnInit(): void {}
  @Input() id: number;
  @Output() editedEmitter = new EventEmitter<number>();


  
  onClickButton(event:any) {  event.target.disabled = true; 
      this.userService.RetirerAmis(this.token.getUser().id , this.id);  }   



  setSaving(element, text){
    element.textContent = text;
    element.disabled = true;
  }


}