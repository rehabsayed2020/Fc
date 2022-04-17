import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShootComponent } from './add-shoot.component';

describe('AddShootComponent', () => {
  let component: AddShootComponent;
  let fixture: ComponentFixture<AddShootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
