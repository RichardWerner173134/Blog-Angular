import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeitragComponent } from './beitrag.component';

describe('BeitragComponent', () => {
  let component: BeitragComponent;
  let fixture: ComponentFixture<BeitragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeitragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeitragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
