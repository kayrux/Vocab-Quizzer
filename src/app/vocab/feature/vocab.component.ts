import { Component, OnInit } from '@angular/core';
import { VocabService } from '../data-access/vocab.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css'],
})
export class VocabComponent implements OnInit {

  constructor(public vocabService:VocabService, public dialog: MatDialog) { }
  panelOpenState = false;
  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(deleteWindowDialog);
  }

}

@Component({
  selector: 'delete-window-dialog',
  templateUrl: 'delete-window-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class deleteWindowDialog {}
