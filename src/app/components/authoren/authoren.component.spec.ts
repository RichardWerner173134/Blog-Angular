import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorenComponent } from './authoren.component';

describe('AuthorenComponent', () => {
  let component: AuthorenComponent;
  let fixture: ComponentFixture<AuthorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
