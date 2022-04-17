import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessServiceComponent } from './process-service.component';

describe('ProcessServiceComponent', () => {
  let component: ProcessServiceComponent;
  let fixture: ComponentFixture<ProcessServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
