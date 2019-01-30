import {Component} from '@angular/core';
import {CircleItem} from './circle-item';
import {CIRCLES} from './circles-list';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Test Circles';

    condition = false;

    toggle() {
        this.condition = !this.condition;
    }

}
