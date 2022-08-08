import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  topics = ['Angular','React','Vue'];
  user=new User("spoorthi","spoo@gmail.com","Angular","morning",true);

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(){
    alert(`Submitted successfully with name "${this.user.name}`)
    alert(JSON.stringify(this.user));
  }
}


