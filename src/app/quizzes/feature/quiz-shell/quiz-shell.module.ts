import { SharedAngularMaterialModule } from '../../../shared/shared-modules/shared-angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from '../quizzes.component';
import { QuizShellRoutingModule } from './quiz-shell-routing.module';
import { OptionCardComponent } from 'src/app/shared/ui/option-card/option-card.component';
import { QuizComponent } from '../quiz/quiz.component';
import { SharedCommon } from 'src/app/shared/shared-modules/shared-common.module';
import { ProgressBarComponent } from 'src/app/shared/ui/progress-bar/progress-bar.component';

@NgModule({
  declarations: [QuizzesComponent, QuizComponent],
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
