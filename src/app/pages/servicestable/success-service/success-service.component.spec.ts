import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessServiceComponent } from './success-service.component';

describe('SuccessServiceComponent', () => {
  let component: SuccessServiceComponent;
  let fixture: ComponentFixture<SuccessServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
