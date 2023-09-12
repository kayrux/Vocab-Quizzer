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
  public savedVocabListKeys: string[] = [];
  public activeQuiz = signal(false);

  public allvocab: Word[] = [];

  constructor(private vocabService: VocabService, private router: Router) {}

  newQuiz(type: QuizType, quizLength?: number, vocabListKeys?: string[]): void {
    this.updatecombinedVocabList();
    switch (type) {
      case 'random':
        this.quiz = this.createRandomQuiz();
        break;
      case 'quick custom':
        this.quiz = this.createQuizCustomQuiz(
          quizLength || 0,
          vocabListKeys || []
        );
        break;
      case 'custom':
        break;
    }
    this.activeQuiz.set(true);
    this.router.navigateByUrl('/quizzes/quiz');
  }

  repeatQuiz(quizType: QuizType) {
    if (quizType === 'random') {
      this.newQuiz(this.quiz.type);
      return;
    }
    this.newQuiz(
      this.quiz.type,
      this.quiz.questions.length,
      this.savedVocabListKeys
    );
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
  createQuizCustomQuiz(quizLength: number, vocabListKeys: string[]): Quiz {
    this.savedVocabListKeys = vocabListKeys;
    const quizVocab = this.getRandomVocabFromLists(quizLength, vocabListKeys);
    console.log('quick custom vocab', quizVocab);
    const questions = this.generateQuizQuestions(quizVocab);
    console.log('quick custom questions', questions);
    return {
      type: 'quick custom',
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
      let answerIsLocal = this.getRandomNumber(0, 1) ? true : false;
      return {
        type: 'multiple choice',
        prompt: this.generatePrompt(word, answerIsLocal),
        answer: answerIsLocal ? word.local : word.translation,
        options: this.getMultipleChoiceOptions(word, 4, answerIsLocal),
      };
    } else {
      return {
        type: 'text',
        prompt: `What does <b>${word.local}</b> translate to?`,
        answer: word.translation,
      };
    }
  }

  getMultipleChoiceOptions(
    answer: Word,
    numOptions: number,
    answerIsLocal = true
  ) {
    let options = [...this.getRandomVocab(numOptions - 1, answer), answer];
    return this.randomizeArray(
      options.map((word) => {
        return this.generateMultipleChoiceOption(word, answerIsLocal);
      })
    );
  }

  generatePrompt(word: Word, answerIsLocal: boolean) {
    let wordPrompt = answerIsLocal ? word.translation : word.local;
    return `What does <b>${this.prependArticle(
      word,
      wordPrompt
    )}</b> translate to?`;
  }

  generateMultipleChoiceOption(word: Word, answerIsLocal: boolean) {
    let option = answerIsLocal ? word.local : word.translation;
    return this.prependArticle(word, option);
  }

  prependArticle(word: Word, prependTo: string) {
    if (word.article && prependTo === word.translation) {
      return word.article + ' ' + prependTo;
    } else {
      return prependTo;
    }
  }

  getRandomVocabFromLists(
    numVocab: number,
    listKeys: string[],
    exclude?: Word
  ): Word[] {
    let availableVocab: Word[] = [];
    this.vocabService.allVocabLists.forEach((list) => {
      if (listKeys.includes(list.title)) {
        availableVocab = [...availableVocab, ...list.vocab];
      }
    });
    return this.getRandomVocab(numVocab, exclude, availableVocab);
  }

  getRandomVocab(numVocab: number, exclude?: Word, vocab?: Word[]): Word[] {
    let availableVocab = vocab ? vocab : this.allvocab;
    if (numVocab >= availableVocab.length) {
      return [...availableVocab];
    }
    let copy = [];
    if (exclude) {
      copy = [...availableVocab.filter((word) => word.local !== exclude.local)];
    } else {
      copy = [...availableVocab];
    }
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy.slice(0, numVocab);
  }

  randomizeArray(array: any[]) {
    let copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
