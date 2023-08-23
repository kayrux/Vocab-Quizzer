import { Injectable } from '@angular/core';
import vocabJSON from '../data-access/vocab.json';
import { combineLatest, map, of, tap } from 'rxjs';
import { VocabJSON, VocabList } from './vocab.model';
@Injectable({
  providedIn: 'root',
})
export class VocabService {
  public vocabJSON = vocabJSON as VocabJSON;

  public defaultLists = Object.values(vocabJSON.languages.german.defaultLists);
  public customLists: VocabList[] = [];

  constructor() {}

  public newList() {
    console.log('New list added', this.customLists);
    this.customLists.push({
      title: 'new',
      vocab: [
        { local: 'one', translation: 'eins' },
        { local: 'two', translation: 'zwei' },
        { local: 'three', translation: 'drei' },
        { local: 'four', translation: 'vier' },
        { local: 'five', translation: 'fünf' },
      ],
    });
  }
}
