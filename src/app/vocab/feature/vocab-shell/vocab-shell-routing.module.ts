import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabComponent } from '../vocab.component';

const routes: Routes = [
  {
    path: '',
    component: VocabComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class VocabShellRoutingModule { }
