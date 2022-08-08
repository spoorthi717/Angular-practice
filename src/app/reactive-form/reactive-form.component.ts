import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
 

  constructor(private fb:FormBuilder){

  }

  registrationForm=this.fb.group({
      userName:['keerthi',[ Validators.required, Validators.minLength(3)]],
      password:['']
  });
  
 ngOnInit(): void {
  }
  
 loadData(){
    this.registrationForm.setValue({
        userName:'Spoorthi',
        password:'spoo'
    });
}


  }

