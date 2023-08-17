import { Injectable } from '@angular/core';
import vocabJSON from '../data-access/vocab.json';
import { VocabJSON } from './vocab.model';
@Injectable({
  providedIn: 'root',
})
export class VocabService {
  public vocabJSON = vocabJSON as VocabJSON;

  public defaultLists = Object.values(vocabJSON.languages.german.defaultLists);

  constructor() {}
}
