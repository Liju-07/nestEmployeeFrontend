import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpleaveComponent } from './view-empleave.component';

describe('ViewEmpleaveComponent', () => {
  let component: ViewEmpleaveComponent;
  let fixture: ComponentFixture<ViewEmpleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
