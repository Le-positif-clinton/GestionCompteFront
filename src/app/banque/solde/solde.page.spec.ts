import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoldePage } from './solde.page';

describe('SoldePage', () => {
  let component: SoldePage;
  let fixture: ComponentFixture<SoldePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SoldePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
