import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagemComponent } from './linguagem.component';

describe('LinguagemComponent', () => {
  let component: LinguagemComponent;
  let fixture: ComponentFixture<LinguagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinguagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
