import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedServiceComponent } from './failed-service.component';

describe('FailedServiceComponent', () => {
  let component: FailedServiceComponent;
  let fixture: ComponentFixture<FailedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
