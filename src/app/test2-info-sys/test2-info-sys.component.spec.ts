import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2InfoSysComponent } from './test2-info-sys.component';

describe('Test2InfoSysComponent', () => {
  let component: Test2InfoSysComponent;
  let fixture: ComponentFixture<Test2InfoSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2InfoSysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test2InfoSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
