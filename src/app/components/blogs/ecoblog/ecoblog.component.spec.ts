import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoblogComponent } from './ecoblog.component';

describe('EcoblogComponent', () => {
  let component: EcoblogComponent;
  let fixture: ComponentFixture<EcoblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
