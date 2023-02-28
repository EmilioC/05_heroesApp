import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes : Routes = [
  {
    path: '404',
    component: ErrorPageComponent    
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
