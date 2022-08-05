import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent-to-child/parent/parent.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ViewChildChildComponent } from './viewchild/child/child.component';
import { ViewChildParentComponent } from './viewchild/parent/parent.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'viewchild/child', component: ViewChildChildComponent },
  { path: 'viewchild/parent', component: ViewChildParentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
