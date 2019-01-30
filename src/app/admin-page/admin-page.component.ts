import {Component, OnInit} from '@angular/core';
import {CIRCLES} from '../circles-list';
import {CircleItem} from '../circle-item';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

    circles = CIRCLES;
    selectedItem: CircleItem;

    constructor() {
    }

    ngOnInit() {
    }



    onSelect(circleCurrent: CircleItem): void {
        this.selectedItem = circleCurrent;
    }
}
