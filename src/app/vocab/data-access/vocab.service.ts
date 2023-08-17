import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  public basicVocabList = ['ein','zwei','drei','vier'];
  constructor() { }
}
