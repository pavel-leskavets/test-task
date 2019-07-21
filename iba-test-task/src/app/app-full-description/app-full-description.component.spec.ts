import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFullDescriptionComponent } from './app-full-description.component';

describe('AppFullDescriptionComponent', () => {
  let component: AppFullDescriptionComponent;
  let fixture: ComponentFixture<AppFullDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFullDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFullDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
