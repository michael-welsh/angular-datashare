import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent-to-child/parent/parent.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ViewChildChildComponent } from './viewchild/child/child.component';
import { ViewChildParentComponent } from './viewchild/parent/parent.component';
import { OutputParentComponent } from './output/parent/parent.component';
import { OutputChildComponent } from './output/child/child.component';
import { HockeyVoteComponent } from './service/parent/parent.component';
import { VoterComponent } from './service/child/child.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    HockeyVoteComponent,
    VoterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
