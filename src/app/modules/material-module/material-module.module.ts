import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as material from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,material.MatToolbarModule, material.MatButtonModule, material.MatSidenavModule, material.MatIconModule, material.MatListModule,material.MatCardModule,material.MatGridListModule
    ,material.MatInputModule,material.MatButtonModule, material.MatButtonToggleModule, material.MatTabsModule
  ],exports:[material.MatToolbarModule, material.MatButtonModule, material.MatSidenavModule, material.MatIconModule, material.MatListModule,material.MatCardModule,material.MatGridListModule
    ,material.MatInputModule,material.MatButtonModule, material.MatButtonToggleModule, material.MatTabsModule]
})
export class MaterialModuleModule { }
