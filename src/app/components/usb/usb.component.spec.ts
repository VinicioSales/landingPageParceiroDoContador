import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbComponent } from './usb.component';

describe('UsbComponent', () => {
  let component: UsbComponent;
  let fixture: ComponentFixture<UsbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsbComponent]
    });
    fixture = TestBed.createComponent(UsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
