import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TechblogComponent } from './components/blogs/techblog/techblog.component';
import { EcoblogComponent } from './components/blogs/ecoblog/ecoblog.component';


const appRoutes:Routes = [

    {path:'home',component:HomeComponent},
    {path:'about/:id/:name',component:AboutusComponent},
    {path:'blog',component:BlogsComponent , children:[
      {path:'goto/v1/tech',component:TechblogComponent},
      {path:'goto/v1/eco',component:EcoblogComponent},
    ]},
    {path:'contact/:value',component:ContactusComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    BlogsComponent,
    ContactusComponent,
    PageNotFoundComponent,
    TechblogComponent,
    EcoblogComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
