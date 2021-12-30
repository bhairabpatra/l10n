import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestlocComponent } from './testloc/testloc.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [TestlocComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports:[
    TestlocComponent,

  ]
})
export class ChildModule { }
