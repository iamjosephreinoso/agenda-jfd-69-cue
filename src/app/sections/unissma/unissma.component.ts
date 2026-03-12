import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-unissma',
  templateUrl: './unissma.component.html',
  styleUrls: ['./unissma.component.css']
})
export class UnissmaComponent implements OnInit {

    activeTab: string = 'tab1';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const tab = params['tab'];
            if (tab === 'tab2') {
                this.activeTab = 'tab2';
            } else {
                this.activeTab = 'tab1';
            }
        });
    }
}
