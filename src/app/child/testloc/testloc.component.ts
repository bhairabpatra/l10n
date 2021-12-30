import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-testloc',
  templateUrl: './testloc.component.html',
  styleUrls: ['./testloc.component.scss']
})
export class TestlocComponent implements OnInit {


  constructor(public translate: TranslateService){

  }


  ngOnInit(): void {
  }

}
