import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimmovieComponent } from './simmovie.component';

describe('SimmovieComponent', () => {
  let component: SimmovieComponent;
  let fixture: ComponentFixture<SimmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
