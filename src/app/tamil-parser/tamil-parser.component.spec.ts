import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilParserComponent } from './tamil-parser.component';

describe('TamilParserComponent', () => {
  let component: TamilParserComponent;
  let fixture: ComponentFixture<TamilParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamilParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
