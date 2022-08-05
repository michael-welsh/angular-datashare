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

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    OutputParentComponent,
    OutputChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
