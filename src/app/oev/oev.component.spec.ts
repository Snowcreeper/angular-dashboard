import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OevComponent } from './oev.component';

describe('OevComponent', () => {
  let component: OevComponent;
  let fixture: ComponentFixture<OevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
