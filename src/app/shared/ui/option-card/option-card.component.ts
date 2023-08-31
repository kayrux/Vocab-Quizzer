import { Component, Input, OnInit } from '@angular/core';
import { CardSize } from './option-card.model';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-option-card',
  standalone: true,
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.css'],
  imports: [CommonModule],
})
export class OptionCardComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public size: CardSize = 'small';
  @Input() public selected: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
