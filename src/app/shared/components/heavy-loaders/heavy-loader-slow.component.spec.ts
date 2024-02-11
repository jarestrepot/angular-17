import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyLoaderSlowComponent } from './heavy-loader-slow.component';

describe('HeavyLoaderSlowComponent', () => {
  let component: HeavyLoaderSlowComponent;
  let fixture: ComponentFixture<HeavyLoaderSlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyLoaderSlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeavyLoaderSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
