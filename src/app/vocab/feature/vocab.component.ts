import { Component, OnInit } from '@angular/core';
import { VocabService } from '../data-access/vocab.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css'],
})
export class VocabComponent implements OnInit {
  constructor(
    public vocabService: VocabService,
    public dialog: MatDialog,
    public favoriteSnackBar: MatSnackBar
  ) {}
  panelOpenState = false;
  ngOnInit(): void {}

  openDeleteDialog() {
    this.dialog.open(deleteWindowDialog);
  }

  openFavoriteSnackBar(vocab: string) {
    this.favoriteSnackBar.open(
      'Vocab has been added to your favorite!!',
      'DONE!'
    );
  }
}

@Component({
  selector: 'delete-window-dialog',
  templateUrl: 'delete-window-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class deleteWindowDialog {}
