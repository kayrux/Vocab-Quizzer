import { VocabService } from './../../vocab/data-access/vocab.service';
import { Injectable, signal } from '@angular/core';
import {
  Question,
  QuestionType,
  Quiz,
  QuizType,
  quizLengths,
} from './quiz.model';
import { Word, VocabList } from 'src/app/vocab/data-access/vocab.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  public quiz!: Quiz;
  public activeQuiz = signal(false);

  public allvocab: Word[] = [];

  constructor(private vocabService: VocabService, private router: Router) {}

  newQuiz(type: QuizType): void {
    this.updatecombinedVocabList();
    switch (type) {
      case 'random':
        this.quiz = this.createRandomQuiz();
        break;
      case 'quick custom':
        break;
      case 'custom':
        break;
    }
    this.activeQuiz.set(true);
    this.router.navigateByUrl('/quizzes/quiz');
  }

  createRandomQuiz(): Quiz {
    const quizVocab = this.getRandomVocab(
      quizLengths[this.getRandomNumber(0, quizLengths.length - 1)]
    );

    const questions = this.generateQuizQuestions(quizVocab);
    return {
      type: 'random',
      questions: questions,
    };
  }

  updatecombinedVocabList() {
    const allCombinedLists: VocabList[] = [
      ...this.vocabService.customLists,
      ...this.vocabService.defaultLists,
    ];

    let vocab: Word[] = [];
    for (let list of allCombinedLists) {
      vocab.push(...list.vocab);
    }
    this.allvocab = [...new Set(vocab)];
  }

  generateQuizQuestions(vocab: Word[]): Question[] {
    let questions: Question[] = [];
    for (let word of vocab) {
      questions.push(this.generateQuestion(word, 'multiple choice'));
    }
    console.log('quiz questions', questions);
    return questions;
  }

  generateQuestion(word: Word, questionType: QuestionType): Question {
    if (questionType === 'multiple choice') {
      return {
        type: 'multiple choice',
        prompt: `What does <b>${word.translation}</b> translate to?`,
        answer: word.local,
        options: [
          word.local,
          ...this.getRandomVocab(3).map((word) => word.local),
        ],
      };
    } else {
      return {
        type: 'text',
        prompt: `What does <b>${word.local}</b> translate to?`,
        answer: word.translation,
      };
    }
  }

  getRandomVocab(numVocab: number): Word[] {
    if (numVocab >= this.allvocab.length) {
      return [...this.allvocab];
    }

    let copy = [...this.allvocab];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy.slice(0, numVocab);
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
