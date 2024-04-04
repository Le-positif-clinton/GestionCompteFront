import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewGestionnairePage } from './new-gestionnaire.page';

describe('NewGestionnairePage', () => {
  let component: NewGestionnairePage;
  let fixture: ComponentFixture<NewGestionnairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewGestionnairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
