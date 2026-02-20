import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-nucleoicons',
    templateUrl: './investigacion.component.html',
    styleUrls: ['./investigacion.component.scss']
})
export class InvestigacionComponent {

    activeTab: string = 'tab1';

    constructor(private route: ActivatedRoute) {
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

