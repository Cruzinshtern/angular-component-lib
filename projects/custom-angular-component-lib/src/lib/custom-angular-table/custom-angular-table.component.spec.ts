import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularTableComponent } from './custom-angular-table.component';

describe('CustomAngularTableComponent', () => {
  let component: CustomAngularTableComponent;
  let fixture: ComponentFixture<CustomAngularTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAngularTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomAngularTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
