import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from '../quizzes.component';
import { QuizComponent } from '../quiz/quiz.component';
import { quizGuard } from 'src/app/shared/data-access/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: QuizzesComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [quizGuard()],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizShellRoutingModule {}
