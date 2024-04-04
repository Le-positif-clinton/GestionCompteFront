import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonEntrePage } from './bon-entre.page';

describe('BonEntrePage', () => {
  let component: BonEntrePage;
  let fixture: ComponentFixture<BonEntrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonEntrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
