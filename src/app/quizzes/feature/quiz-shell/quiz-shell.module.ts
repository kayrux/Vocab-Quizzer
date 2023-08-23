import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from '../quizzes.component';
import { QuizShellRoutingModule } from './quiz-shell-routing.module';
import { OptionCardComponent } from 'src/app/shared/ui/option-card/option-card.component';
import { QuizComponent } from '../quiz/quiz.component';

@NgModule({
  declarations: [QuizzesComponent, QuizComponent],
  imports: [CommonModule, QuizShellRoutingModule, OptionCardComponent],
  exports: [],
})
export class QuizShellModule {}
