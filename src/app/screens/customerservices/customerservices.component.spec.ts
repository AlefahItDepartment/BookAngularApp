import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerservicesComponent } from './customerservices.component';

describe('CustomerservicesComponent', () => {
  let component: CustomerservicesComponent;
  let fixture: ComponentFixture<CustomerservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
