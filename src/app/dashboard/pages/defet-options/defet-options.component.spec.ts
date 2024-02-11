import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefetOptionsComponent } from './defet-options.component';

describe('DefetOptionsComponent', () => {
  let component: DefetOptionsComponent;
  let fixture: ComponentFixture<DefetOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefetOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefetOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
