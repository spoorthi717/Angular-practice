// import { Component } from '@angular/core';
// import { ControlBase } from './controls/control-base';
// import { DataService } from './data.service';
// import { MetaService } from './meta.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
 
// })
// export class AppComponent {
//   title = 'Angularpractice';
//   meta!: ControlBase[];
//   data!: any;
//   constructor(
//     private metaService: MetaService,
//     private dataService: DataService,
//   ) {}

//   async ngOnInit() {
//     this.refresh();
//   }

//   async refresh() {
//     this.data = await this.dataService.getData();
//     this.meta = (await this.metaService.getMeta()) as ControlBase[];
//   }
// }



import { Component } from '@angular/core';
import { IntercationService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-demo';

  constructor(private _interactionService: IntercationService){}

    greetStudent(){
      this._interactionService.sendMessage('Good Morning');
    }

    appreciateStudent(){
      this._interactionService.sendMessage('Well Done');  
    }
}
  

