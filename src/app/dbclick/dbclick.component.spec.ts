import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbclickComponent } from './dbclick.component';

describe('DbclickComponent', () => {
  let component: DbclickComponent;
  let fixture: ComponentFixture<DbclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
