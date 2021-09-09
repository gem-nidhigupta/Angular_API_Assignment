import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsOfAllUsersComponent } from './view-details-of-all-users.component';

describe('ViewDetailsOfAllUsersComponent', () => {
  let component: ViewDetailsOfAllUsersComponent;
  let fixture: ComponentFixture<ViewDetailsOfAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsOfAllUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsOfAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
