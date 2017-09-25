import { NgModule }      from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
 
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    
    { path: 'home',  component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:name', component: SearchComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule { }