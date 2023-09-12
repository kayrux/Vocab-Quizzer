import { QuizService } from 'src/app/quizzes/data-access/quiz.service';
import { quizLengths } from './../../data-access/quiz.model';
import {
  Component,
  DestroyRef,
  inject,
  signal,
  effect,
  Input,
  WritableSignal,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { VocabService } from 'src/app/vocab/data-access/vocab.service';

@Component({
  selector: 'app-create-custom-quiz',
  templateUrl: './create-custom-quiz.component.html',
  styleUrls: ['./create-custom-quiz.component.css'],
})
export class CreateCustomQuizComponent {
  @Input() $onBackClick!: Subject<void>;
  private destroyRef = inject(DestroyRef);

  public numListsSelected = signal(0);
  public quizLengths = quizLengths;

  public vocabListCheckboxGroup: FormGroup = new FormGroup({});
  public createQuizFormGroup: FormGroup = new FormGroup({});
  public vocabListSelected: FormControl = new FormControl(
    false,
    Validators.requiredTrue
  );
  public quizLengthFormControl: FormControl = new FormControl(
    null,
    Validators.required
  );

  constructor(
    public vocabService: VocabService,
    public quizService: QuizService
  ) {
    effect(() => {
      this.vocabListSelected.setValue(
        this.numListsSelected() > 0 ? true : false
      );
      console.log(this.numListsSelected());
    });
  }

  ngOnInit() {
    const destroyed = new Subject<void>();

    this.destroyRef.onDestroy(() => {
      destroyed.next();
      destroyed.complete();
    });

    this.vocabService.allVocabLists.forEach((vocabList) => {
      let control = new FormControl(false);
      control.valueChanges.pipe(takeUntil(destroyed)).subscribe((selected) => {
        this.numListsSelected.update((value) =>
          selected ? (value += 1) : (value -= 1)
        );
      });
      this.vocabListCheckboxGroup.addControl(vocabList.title, control);
    });

    this.createQuizFormGroup.addControl(
      'quizLength',
      this.quizLengthFormControl
    );
    this.createQuizFormGroup.addControl('vocabList', this.vocabListSelected);
  }

  back() {
    this.$onBackClick.next();
    this.createQuizFormGroup.reset();
  }

  submit() {
    this.createQuizFormGroup.markAllAsTouched();
    if (this.createQuizFormGroup.valid) {
      let vocabListKeys: string[] = [];
      Object.keys(this.vocabListCheckboxGroup.controls).forEach(
        (controlKey) => {
          if (this.vocabListCheckboxGroup.controls[controlKey].value === true) {
            vocabListKeys.push(controlKey);
          }
        }
      );
      this.quizService.newQuiz(
        'quick custom',
        this.quizLengthFormControl.value,
        vocabListKeys
      );
    }
  }
}
