import { UserService } from '../../servicesUser/user.service';
import { TokenStorageService } from '../../servicesUser/token-storage.service';
import { Router } from '@angular/router';
import { User } from 'src/Model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  username?: string;


  constructor(private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.username = user.username;

  }

}
