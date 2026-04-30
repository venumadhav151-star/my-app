import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVechileComponent } from './create-vechile.component';

describe('CreateVechileComponent', () => {
  let component: CreateVechileComponent;
  let fixture: ComponentFixture<CreateVechileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVechileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVechileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
