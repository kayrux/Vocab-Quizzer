import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabShellRoutingModule } from './vocab-shell-routing.module';
import { VocabComponent } from '../vocab.component';

@NgModule({
  declarations: [VocabComponent],
  imports: [CommonModule, VocabShellRoutingModule],
})
export class VocabShellModule {}
