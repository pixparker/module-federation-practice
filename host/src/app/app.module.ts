import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SettingModule } from './setting/setting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'setting', loadChildren: () => SettingModule }
      ]

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
