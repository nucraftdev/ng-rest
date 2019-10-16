/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerconListComponent } from './percon-list.component';

describe('PerconListComponent', () => {
  let component: PerconListComponent;
  let fixture: ComponentFixture<PerconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
