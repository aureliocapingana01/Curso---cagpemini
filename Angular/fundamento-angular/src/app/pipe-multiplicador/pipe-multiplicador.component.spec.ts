import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMultiplicadorComponent } from './pipe-multiplicador.component';

describe('PipeMultiplicadorComponent', () => {
  let component: PipeMultiplicadorComponent;
  let fixture: ComponentFixture<PipeMultiplicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeMultiplicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeMultiplicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
