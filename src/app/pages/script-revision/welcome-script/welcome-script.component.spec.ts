import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScriptComponent } from './welcome-script.component';

describe('WelcomeScriptComponent', () => {
  let component: WelcomeScriptComponent;
  let fixture: ComponentFixture<WelcomeScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
