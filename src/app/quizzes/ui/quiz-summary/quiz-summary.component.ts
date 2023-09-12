import { QuizService } from 'src/app/quizzes/data-access/quiz.service';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.css'],
})
export class QuizSummaryComponent {
  @Input() totalQuestions: number = 1;
  @Input() numCorrect: number = 0;
  @Input() $onResetQuiz!: Subject<void>;

  constructor(public quizService: QuizService) {}
  public tryAgain() {
    if (!this.quizService.quiz) {
      console.log('Error! No quiz found!');
      return;
    }
    this.quizService.repeatQuiz(this.quizService.quiz.type);
    this.$onResetQuiz.next();
  }
}
