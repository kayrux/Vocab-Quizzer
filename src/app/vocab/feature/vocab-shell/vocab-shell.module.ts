import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabShellRoutingModule } from './vocab-shell-routing.module';
import { VocabComponent } from '../vocab.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VocabComponent],
  imports: [
    CommonModule, 
    VocabShellRoutingModule, 
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,],
})
export class VocabShellModule {}
