import { QuizType } from './../data-access/quiz.model';
import { QuizService } from './../data-access/quiz.service';
import { Component, OnInit, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { VocabService } from 'src/app/vocab/data-access/vocab.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent implements OnInit {
  public customQuizSelected: boolean = false;
  public $customQuizSelected = signal(this.customQuizSelected);
  public $onBackClick: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private quizService: QuizService,
    private vocabService: VocabService
  ) {
    effect(() => {
      this.customQuizSelected = this.$customQuizSelected();
    });

    this.$onBackClick.subscribe(() => {
      this.customQuizSelected = false;
    });
  }

  ngOnInit(): void {}

  selectQuiz(type: QuizType) {
    if (type === 'quick custom') {
      this.customQuizSelected = true;
      return;
    }
    this.quizService.newQuiz(type);
  }
}
