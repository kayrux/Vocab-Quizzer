export interface VocabJSON {
  languages: { [key: string]: LanguageSchema };
}

export interface LanguageSchema {
  defaultLists: { [key: string]: VocabList };
}

export interface VocabList {
  title: string;
  vocab: Word[];
}

export interface Word {
  local: string;
  translation: string;
  article?: Article;
  isFav: boolean;
}

export type Article = 'der' | 'die' | 'das';
