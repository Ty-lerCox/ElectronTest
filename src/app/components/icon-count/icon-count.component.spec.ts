import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCountComponent } from './icon-count.component';

describe('IconCountComponent', () => {
  let component: IconCountComponent;
  let fixture: ComponentFixture<IconCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
