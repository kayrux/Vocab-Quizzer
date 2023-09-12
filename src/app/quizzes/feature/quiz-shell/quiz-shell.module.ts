import { SharedAngularMaterialModule } from '../../../shared/shared-modules/shared-angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from '../quizzes.component';
import { QuizShellRoutingModule } from './quiz-shell-routing.module';
import { OptionCardComponent } from 'src/app/shared/ui/option-card/option-card.component';
import { QuizComponent } from '../quiz/quiz.component';
import { SharedCommon } from 'src/app/shared/shared-modules/shared-common.module';
import { ProgressBarComponent } from 'src/app/shared/ui/progress-bar/progress-bar.component';
import { QuizSummaryComponent } from '../../ui/quiz-summary/quiz-summary.component';
import { CreateCustomQuizComponent } from '../create-custom-quiz/create-custom-quiz.component';

@NgModule({
  declarations: [
    QuizzesComponent,
    QuizComponent,
    QuizSummaryComponent,
    CreateCustomQuizComponent,
  ],
  imports: [
    CommonModule,
    QuizShellRoutingModule,
    OptionCardComponent,
    SharedAngularMaterialModule,
    SharedCommon,
    ProgressBarComponent,
  ],
  exports: [],
})
export class QuizShellModule {}
