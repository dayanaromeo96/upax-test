import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  {
    path: '',
    component: DragDropComponent
  },
];

@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class DragDropModule { }
