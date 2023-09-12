import { Injectable } from '@angular/core';
import vocabJSON from '../data-access/vocab.json';
import { combineLatest, map, of, tap } from 'rxjs';
import { VocabJSON, VocabList } from './vocab.model';
@Injectable({
  providedIn: 'root',
})
export class VocabService {
  public vocabJSON = vocabJSON as VocabJSON;

  public defaultLists: VocabList[] = Object.values(
    vocabJSON.languages.german.defaultLists
  ) as VocabList[];
  public customLists: VocabList[] = [];

  constructor() {}

  public get allVocabLists() {
    return [...this.defaultLists, ...this.customLists];
  }
}
