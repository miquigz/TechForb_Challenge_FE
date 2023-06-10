import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  exports:[
    MatSidenavModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
