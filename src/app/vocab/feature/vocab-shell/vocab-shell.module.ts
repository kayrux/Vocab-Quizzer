import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabShellRoutingModule } from './vocab-shell-routing.module';
import { VocabComponent } from '../vocab.component';
import { SharedAngularMaterialModule } from 'src/app/shared/shared-angular-material/shared-angular-material.module';

@NgModule({
  declarations: [VocabComponent],
  imports: [CommonModule, VocabShellRoutingModule, SharedAngularMaterialModule],
})
export class VocabShellModule {}
