import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularPaginatorComponent } from './custom-angular-paginator.component';

describe('CustomAngularPaginatorComponent', () => {
  let component: CustomAngularPaginatorComponent;
  let fixture: ComponentFixture<CustomAngularPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAngularPaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomAngularPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
