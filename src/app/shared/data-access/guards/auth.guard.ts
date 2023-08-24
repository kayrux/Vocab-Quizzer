import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { QuizService } from 'src/app/quizzes/data-access/quiz.service';

export function quizGuard(): CanActivateFn {
  console.log('check active quiz');

  return () => {
    const quizService: QuizService = inject(QuizService);
    const router: Router = inject(Router);
    return quizService.activeQuiz() ? true : router.navigateByUrl('quizzes');
  };
}
