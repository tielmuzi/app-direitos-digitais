import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatoPage } from './relato.page';

describe('RelatoPage', () => {
  let component: RelatoPage;
  let fixture: ComponentFixture<RelatoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
