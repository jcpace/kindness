/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomKindnessComponent } from './random-kindness.component';

describe('RandomKindnessComponent', () => {
  let component: RandomKindnessComponent;
  let fixture: ComponentFixture<RandomKindnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomKindnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomKindnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

let userTime = $(#YOURELEMENTTAG).text().val()
//Best to convert user inut for time into 24hr format
// sub hours from both broswer and input
let browserSub = new Date().toString().split(" ")[4].substring(0,2)
if (userTimeSub === browserSub) {
// ...
}
