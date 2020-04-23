import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialComponent } from './detial.component';

describe('DetialComponent', () => {
  let component: DetialComponent;
  let fixture: ComponentFixture<DetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
