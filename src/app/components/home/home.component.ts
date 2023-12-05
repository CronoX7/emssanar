import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: any[] = [];
  constructor(public formService: FormService){
    this.getAllUsers();
  }

  getAllUsers(){
    this.users= this.formService.getAllUsers()
    console.log(this.users)
  }

  

}
