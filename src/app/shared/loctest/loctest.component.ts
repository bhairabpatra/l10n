import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-loctest',
  templateUrl: './loctest.component.html',
  styleUrls: ['./loctest.component.scss']
})
export class LoctestComponent implements OnInit {

  constructor(public translate: TranslateService){

  }

  ngOnInit(): void {
  }

}
