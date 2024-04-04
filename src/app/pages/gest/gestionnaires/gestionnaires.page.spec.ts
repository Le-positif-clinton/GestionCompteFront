import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionnairesPage } from './gestionnaires.page';

describe('GestionnairesPage', () => {
  let component: GestionnairesPage;
  let fixture: ComponentFixture<GestionnairesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionnairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
