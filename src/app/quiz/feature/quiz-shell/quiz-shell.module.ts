import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from '../quiz.component';
import { QuizShellRoutingModule } from './quiz-shell-routing.module';
import { OptionCardComponent } from 'src/app/shared/ui/option-card/option-card.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, QuizShellRoutingModule, OptionCardComponent],
})
export class QuizShellModule {}
