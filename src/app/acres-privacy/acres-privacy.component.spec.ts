import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcresPrivacyComponent } from './acres-privacy.component';

describe('AcresPrivacyComponent', () => {
  let component: AcresPrivacyComponent;
  let fixture: ComponentFixture<AcresPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcresPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcresPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
