import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDataEntryComponent } from './subject-data-entry.component';

describe('UiDataEntryComponent', () => {
  let component: UiDataEntryComponent;
  let fixture: ComponentFixture<UiDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDataEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
