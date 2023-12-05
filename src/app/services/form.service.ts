import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  arrayForm: any[] = [];

  constructor() {}

  getAllUsers(){
    return this.arrayForm;
  }

  deleteUser(){
    return this.arrayForm.indexOf 
  }

}
