import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtensionsRoutingModule } from './extensions-routing.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    CommonModule,
    ExtensionsRoutingModule
  ],
  declarations: [Page404Component]
})
export class ExtensionsModule { }
