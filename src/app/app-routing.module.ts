import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './common/header/header.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComponent } from './table/table.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

const routes: Routes = [
  // {path:'header',component :HeaderComponent},
  {path:'reactiveForm',component :ReactiveFormComponent },
  {path:'templateDrivenForm',component :TemplateDrivenFormComponent},
  {path:'child',component:ChildComponent},
  {path:'twowayBinding',component:TwowayBindingComponent},
  {path:'table',component:TableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReactiveFormComponent,TemplateDrivenFormComponent,
                                  ChildComponent,TwowayBindingComponent,TableComponent]
