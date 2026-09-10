import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lala',
  templateUrl: './lala.component.html',
  styleUrls: ['./lala.component.scss']
})
export class LalaComponent implements OnInit {

  activeTab: string = 'tab1';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab === '2') {
        this.activeTab = 'tab2';
      } else {
        this.activeTab = 'tab1';
      }
    });
  }

}
