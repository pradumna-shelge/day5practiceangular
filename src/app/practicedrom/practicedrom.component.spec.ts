import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticedromComponent } from './practicedrom.component';

describe('PracticedromComponent', () => {
  let component: PracticedromComponent;
  let fixture: ComponentFixture<PracticedromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticedromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticedromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
