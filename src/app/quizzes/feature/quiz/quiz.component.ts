import { Component, OnInit, effect, signal } from '@angular/core';
import { QuizService } from '../../data-access/quiz.service';
import { Quiz, QuizState } from '../../data-access/quiz.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public selectedQuestionIndex = signal(0);
  public currentQuestionNumber: number = 1;
  public selectedAnswerControl: FormControl = new FormControl(null);
  public quiz!: Quiz;

  public QuizStates = QuizState;
  public quizState: QuizState = QuizState.AWAITING_ANSWER;
  public correctAnswer: boolean = false;
  public disableCheckButton: boolean = false;

  constructor(public quizService: QuizService) {
    effect(() => {
      console.log('effect', this.selectedQuestionIndex());
      this.currentQuestionNumber = this.selectedQuestionIndex() + 1;
    });
  }

  ngOnInit(): void {
    console.log('quiz', this.quizService.quiz);
    this.quiz = this.quizService.quiz;
  }

  setValue(option: string) {
    if (this.quizState === QuizState.ANSWER_CHECKED) {
      return;
    }

    this.quizState = QuizState.ANSWER_SELECTED;
    this.selectedAnswerControl.setValue(option);
  }

  onCheck() {
    if (this.quizState === QuizState.ANSWER_CHECKED) {
      this.continue();
      return;
    }
    console.log('check');

    if (
      this.selectedAnswerControl.value ===
      this.quiz.questions[this.selectedQuestionIndex()].answer
    ) {
      console.log('Correct!');
      this.correctAnswer = true;
    } else {
      this.correctAnswer = false;
    }
    this.quizState = QuizState.ANSWER_CHECKED;
  }

  continue() {
    this.resetSelectedAnswer();
    this.selectedQuestionIndex.update((val) => {
      if (val === this.quiz.questions.length - 1) {
        this.quizState = QuizState.QUIZ_COMPLETE;
        return val;
      } else {
        this.quizState = QuizState.AWAITING_ANSWER;
        return val + 1;
      }
    });
  }

  resetSelectedAnswer() {
    this.selectedAnswerControl.setValue(null);
  }
}
