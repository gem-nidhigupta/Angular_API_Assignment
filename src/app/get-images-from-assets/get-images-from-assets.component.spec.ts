import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImagesFromAssetsComponent } from './get-images-from-assets.component';

describe('GetImagesFromAssetsComponent', () => {
  let component: GetImagesFromAssetsComponent;
  let fixture: ComponentFixture<GetImagesFromAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetImagesFromAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetImagesFromAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
