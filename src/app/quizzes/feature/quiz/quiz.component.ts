import { Component, OnInit, effect, signal } from '@angular/core';
import { QuizService } from '../../data-access/quiz.service';
import { Quiz } from '../../data-access/quiz.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public selectedQuestionIndex = signal(0);
  public currentQuestionNumber: number = 1;
  public selectedAnswerControl: FormControl = new FormControl(null);
  public quiz!: Quiz;

  constructor(public quizService: QuizService) {
    effect(() => {
      console.log('effect', this.selectedQuestionIndex());
      this.currentQuestionNumber = this.selectedQuestionIndex() + 1;
    });
  }

  ngOnInit(): void {
    console.log('quiz', this.quizService.quiz);
    this.quiz = this.quizService.quiz;

    this.selectedAnswerControl.valueChanges.subscribe((answer) => {
      console.log(
        'selected answer',
        answer,
        this.quiz.questions[this.selectedQuestionIndex()].answer
      );
      if (answer === this.quiz.questions[this.selectedQuestionIndex()].answer) {
        console.log('Correct!');
      }
    });
  }

  setValue(option: string) {
    this.selectedAnswerControl.setValue(option);
  }

  onCheck() {
    console.log('check');
    this.selectedQuestionIndex.update((val) => {
      if (val === this.quiz.questions.length - 1) {
        return val;
      } else {
        return val + 1;
      }
    });
  }
}
