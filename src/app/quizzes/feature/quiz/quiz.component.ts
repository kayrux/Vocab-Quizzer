import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../data-access/quiz.service';
import { Quiz } from '../../data-access/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public quiz: Quiz = {
    type: 'random',
    questions: [{ type: 'multiple choice', prompt: 'hello', answer: 'no' }],
  };

  constructor(public quizService: QuizService) {}

  ngOnInit(): void {}
}
