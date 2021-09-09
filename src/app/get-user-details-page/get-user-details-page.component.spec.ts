import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserDetailsPageComponent } from './get-user-details-page.component';

describe('GetUserDetailsPageComponent', () => {
  let component: GetUserDetailsPageComponent;
  let fixture: ComponentFixture<GetUserDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
