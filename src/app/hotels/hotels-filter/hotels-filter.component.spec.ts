import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsFilterComponent } from './hotels-filter.component';

describe('HotelsFilterComponent', () => {
  let component: HotelsFilterComponent;
  let fixture: ComponentFixture<HotelsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsFilterComponent]
    });
    fixture = TestBed.createComponent(HotelsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
