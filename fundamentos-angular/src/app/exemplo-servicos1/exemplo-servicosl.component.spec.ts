import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicoslComponent } from './exemplo-servicosl.component';

describe('ExemploServicoslComponent', () => {
  let component: ExemploServicoslComponent;
  let fixture: ComponentFixture<ExemploServicoslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploServicoslComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServicoslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
