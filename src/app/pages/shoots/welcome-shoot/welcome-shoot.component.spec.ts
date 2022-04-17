import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeShootComponent } from './welcome-shoot.component';

describe('WelcomeShootComponent', () => {
  let component: WelcomeShootComponent;
  let fixture: ComponentFixture<WelcomeShootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeShootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
