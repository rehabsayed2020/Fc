import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootDoneComponent } from './shoot-done.component';

describe('ShootDoneComponent', () => {
  let component: ShootDoneComponent;
  let fixture: ComponentFixture<ShootDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
