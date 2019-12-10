import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoComponent } from './nintendo.component';

describe('NintendoComponent', () => {
  let component: NintendoComponent;
  let fixture: ComponentFixture<NintendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NintendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NintendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
