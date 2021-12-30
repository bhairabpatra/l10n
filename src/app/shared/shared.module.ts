import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoctestComponent } from './loctest/loctest.component';

import { ChildModule } from '../child/child.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';



// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [LoctestComponent],
  imports: [
    CommonModule,
     TranslateModule,
    ChildModule,
    // TranslateModule
    // .forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  exports:[
    LoctestComponent,
    ChildModule
  ]
})
export class SharedModule { }
