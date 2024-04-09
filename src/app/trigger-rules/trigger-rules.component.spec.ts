import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerRulesComponent } from './trigger-rules.component';

describe('TriggerRulesComponent', () => {
  let component: TriggerRulesComponent;
  let fixture: ComponentFixture<TriggerRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriggerRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriggerRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
