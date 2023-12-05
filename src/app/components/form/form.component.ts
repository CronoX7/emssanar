import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  // arrayForm: any[] = [];
  formDefault ={
    nomAfiliado: "",
    apeAfiliado: "",
    fechaAfiliado: "",
    dirAfiliado: "",
    ciuAfiliado: "",
    telAfiliado: "",
  }  

  constructor(public formService: FormService){}

  addUser(form: NgForm){
    console.log(form)
    this.formService.arrayForm.push(form.value)
    console.log(this.formService.arrayForm)
  }

}


