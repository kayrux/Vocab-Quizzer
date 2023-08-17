import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from '../quiz.component';
import { QuizShellRoutingModule } from './quiz-shell-routing.module';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, QuizShellRoutingModule],
})
export class QuizShellModule {}
