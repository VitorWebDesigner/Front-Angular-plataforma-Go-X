import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAulaComponent } from './info-aula.component';

describe('InfoAulaComponent', () => {
  let component: InfoAulaComponent;
  let fixture: ComponentFixture<InfoAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
