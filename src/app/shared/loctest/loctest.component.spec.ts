import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoctestComponent } from './loctest.component';

describe('LoctestComponent', () => {
  let component: LoctestComponent;
  let fixture: ComponentFixture<LoctestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoctestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoctestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
