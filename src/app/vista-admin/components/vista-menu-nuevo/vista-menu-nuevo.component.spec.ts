import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMenuNuevoComponent } from './vista-menu-nuevo.component';

describe('VistaMenuNuevoComponent', () => {
  let component: VistaMenuNuevoComponent;
  let fixture: ComponentFixture<VistaMenuNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaMenuNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMenuNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
