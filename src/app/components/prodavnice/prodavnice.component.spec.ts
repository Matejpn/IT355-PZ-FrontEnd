import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdavniceComponent } from './prodavnice.component';

describe('ProdavniceComponent', () => {
  let component: ProdavniceComponent;
  let fixture: ComponentFixture<ProdavniceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdavniceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdavniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
