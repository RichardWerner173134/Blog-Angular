import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeitragViewComponent } from './beitrag-view.component';

describe('BeitragViewComponent', () => {
  let component: BeitragViewComponent;
  let fixture: ComponentFixture<BeitragViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeitragViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeitragViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
