import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudosExtrasComponent } from './conteudos-extras.component';

describe('ConteudosExtrasComponent', () => {
  let component: ConteudosExtrasComponent;
  let fixture: ComponentFixture<ConteudosExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudosExtrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudosExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
