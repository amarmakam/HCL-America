import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [MatSelectModule, BrowserAnimationsModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
  });
 
  it('should create and check the options and title', () => {
    expect(component).toBeTruthy();
    component.dropdownLabel = 'Sample data';
    component.options = [
      {
        id: 'sample',
        value: 'sample'
      }
    ]
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const matLabelElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('#mat-label');
      expect(matLabelElement.innerHTML).toEqual(component.dropdownLabel);
      expect(matLabelElement).toBeDefined();

      const matSelect: HTMLElement = fixture.debugElement.nativeElement.querySelector('#mat-select');
      expect(matSelect).toBeDefined();
      expect(matSelect.children.length).toEqual(component.options.length);

      for(let i = 0 ; i < matSelect.children.length ; i++) {
        expect((matSelect.children[i]).innerHTML).toEqual((component.options[i].value).toString());
      }

      const mockSelectionChange = spyOn(component, 'valueChange').and.callThrough();
      matSelect.dispatchEvent(new Event('selectionChange'));
      expect(mockSelectionChange).toHaveBeenCalledTimes(1);
    })
  });
});
