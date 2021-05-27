import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerchatComponent } from './sellerchat.component';

describe('SellerchatComponent', () => {
  let component: SellerchatComponent;
  let fixture: ComponentFixture<SellerchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
