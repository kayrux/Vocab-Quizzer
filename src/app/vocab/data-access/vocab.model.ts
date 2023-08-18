export interface VocabJSON {
  languages: { [key: string]: LanguageSchema };
}

export interface LanguageSchema {
  defaultLists: { [key: string]: VocabList };
}

export interface VocabList {
  title: string;
  vocab: Vocab[];
}

export interface Vocab {
  local: string;
  translation: string;
  isFav: boolean;
}
