import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomQuizComponent } from './create-custom-quiz.component';

describe('CreateCustomQuizComponent', () => {
  let component: CreateCustomQuizComponent;
  let fixture: ComponentFixture<CreateCustomQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCustomQuizComponent]
    });
    fixture = TestBed.createComponent(CreateCustomQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
