import { Component, OnInit } from '@angular/core';
import { IntercationService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionService: IntercationService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$
    .subscribe(
      message =>{
        if(message === 'Good Morning'){
          alert('Good Morning Teacher');
        } else if(message === 'Well Done'){
          alert('Thank You Teacher');
        }
      }
    )
  }



}
