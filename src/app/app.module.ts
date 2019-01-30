import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
// import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';

// const appRoutes: Routes = [
//     {path: '', component: HomeComponent},
//     {path: 'admin', component: AdminPageComponent},
// ];

@NgModule({
    declarations: [
        AppComponent,
        AdminPageComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
