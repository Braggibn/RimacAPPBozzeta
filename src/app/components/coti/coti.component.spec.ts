import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotiComponent } from './coti.component';

describe('CotiComponent', () => {
  let component: CotiComponent;
  let fixture: ComponentFixture<CotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
