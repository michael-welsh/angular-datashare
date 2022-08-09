import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent-to-child/parent/parent.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ViewChildChildComponent } from './viewchild/child/child.component';
import { ViewChildParentComponent } from './viewchild/parent/parent.component';
import { OutputParentComponent } from './output/parent/parent.component';
import { OutputChildComponent } from './output/child/child.component';
import { HockeyVoteComponent } from './service/parent/parent.component';
import { VoterComponent } from './service/child/child.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'viewchild/child', component: ViewChildChildComponent },
  { path: 'viewchild/parent', component: ViewChildParentComponent },
  { path: 'output/parent', component: OutputParentComponent },
  { path: 'output/child', component: OutputChildComponent },
  { path: 'service/parent', component: HockeyVoteComponent },
  { path: 'service/child', component: VoterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
