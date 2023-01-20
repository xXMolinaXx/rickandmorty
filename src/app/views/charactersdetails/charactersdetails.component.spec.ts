import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersdetailsComponent } from './charactersdetails.component';

describe('CharactersdetailsComponent', () => {
  let component: CharactersdetailsComponent;
  let fixture: ComponentFixture<CharactersdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
