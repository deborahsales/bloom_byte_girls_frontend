import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondButtonComponent } from './diamond-button.component';

describe('DiamondButtonComponent', () => {
  let component: DiamondButtonComponent;
  let fixture: ComponentFixture<DiamondButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamondButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
