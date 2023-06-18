import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSettingComponent } from './main-setting/main-setting.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainSettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainSettingComponent }
    ])
  ]
})
export class SettingModule { }
