import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinDataComponent } from './sin-data.component';

describe('NoDataComponent', () => {
  let component: SinDataComponent;
  let fixture: ComponentFixture<SinDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
