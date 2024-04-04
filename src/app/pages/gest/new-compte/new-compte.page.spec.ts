import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewComptePage } from './new-compte.page';

describe('NewComptePage', () => {
  let component: NewComptePage;
  let fixture: ComponentFixture<NewComptePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
