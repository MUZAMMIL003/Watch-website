import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchfComponent } from './watchf.component';

describe('WatchfComponent', () => {
  let component: WatchfComponent;
  let fixture: ComponentFixture<WatchfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
