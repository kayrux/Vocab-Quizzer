import { QuizService } from './../data-access/quiz.service';
import { Component, OnInit } from '@angular/core';
import { QuizType } from '../data-access/quiz.model';
import { Router } from '@angular/router';
import { VocabService } from 'src/app/vocab/data-access/vocab.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent implements OnInit {
  constructor(
    private router: Router,
    private quizService: QuizService,
    private vocabService: VocabService
  ) {}

  ngOnInit(): void {}

  selectQuiz(type: QuizType) {
    this.quizService.newQuiz(type);
  }
}
