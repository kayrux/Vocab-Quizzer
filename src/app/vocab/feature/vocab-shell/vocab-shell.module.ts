import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabShellRoutingModule } from './vocab-shell-routing.module';
import { VocabComponent } from '../vocab.component';
import { SharedAngularMaterialModule } from 'src/app/shared/shared-modules/shared-angular-material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [VocabComponent],
  imports: [
    CommonModule,
    VocabShellRoutingModule,
    SharedAngularMaterialModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSnackBarModule,
  ],
})
export class VocabShellModule {}
