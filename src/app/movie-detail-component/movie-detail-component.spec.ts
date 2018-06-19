import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeatilComponentComponent } from './movie-detail-component';

describe('MovieDeatilComponentComponent', () => {
  let component: MovieDeatilComponentComponent;
  let fixture: ComponentFixture<MovieDeatilComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDeatilComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDeatilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
