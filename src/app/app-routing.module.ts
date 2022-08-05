import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent-to-child/parent/parent.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ViewChildChildComponent } from './viewchild/child/child.component';
import { ViewChildParentComponent } from './viewchild/parent/parent.component';
import { OutputParentComponent } from './output/parent/parent.component';
import { OutputChildComponent } from './output/child/child.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'viewchild/child', component: ViewChildChildComponent },
  { path: 'viewchild/parent', component: ViewChildParentComponent },
  { path: 'output/parent', component: OutputParentComponent },
  { path: 'output/child', component: OutputChildComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
