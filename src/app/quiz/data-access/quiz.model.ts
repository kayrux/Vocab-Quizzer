export interface Quiz {
  questions: Question[];
}

export interface Question {
  type: QuestionType;
  query: string;
  answer: string;
}

export interface MultipleChoiceQuestion extends Question {
  options: string[];
}

export type QuestionType = 'multiple choice' | 'text';
