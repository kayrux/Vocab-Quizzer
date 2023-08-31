import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.css'],
})
export class QuizSummaryComponent {
  @Input() totalQuestions: number = 1;
  @Input() numCorrect: number = 0;
}
