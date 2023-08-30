import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SharedAngularMaterialModule } from 'src/app/shared/shared-angular-material/shared-angular-material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  vocabToSearch = '';

  onKey(inputedWord: string) {
    this.vocabToSearch = inputedWord;
  }

  openDictionaryDialog()
  {
    const dialogRef = this.dialog.open(dictionaryWindow,{data:{word:this.vocabToSearch}});
  }
}

@Component({
  selector: 'dictionary-window',
  templateUrl: 'dictionary-window.html',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,SharedAngularMaterialModule],
})
export class dictionaryWindow {constructor(public dialogRef: MatDialogRef<dictionaryWindow>,
  @Inject(MAT_DIALOG_DATA) public data:{word:string}) {}}
