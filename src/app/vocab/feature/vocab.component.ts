import { Component, OnInit } from '@angular/core';
import { VocabService } from '../data-access/vocab.service';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css'],
})
export class VocabComponent implements OnInit {
  constructor(public vocabService: VocabService) {}

  ngOnInit(): void {}

  test() {
    this.vocabService.newList();
  }
}
