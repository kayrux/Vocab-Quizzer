export interface Quiz {
  type: QuizType;
  questions: Question[];
}

export interface Question {
  type: QuestionType;
  prompt: string;
  answer: string;
  options?: string[];
}

export type QuestionType = 'multiple choice' | 'text';
export type QuizType = 'random' | 'quick custom' | 'custom';
export enum QuizState {
  AWAITING_ANSWER,
  ANSWER_SELECTED,
  ANSWER_CHECKED,
  QUIZ_COMPLETE,
}

export const quizLengths = [10, 15, 20];
