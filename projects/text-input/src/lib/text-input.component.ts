import { Component, OnInit, Input, Injector, forwardRef } from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'ui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  @Input()
  placeholder = '';

  @Input()
  label = 'Label';

  @Input()
  type = 'text';

  @Input()
  errorMessage = 'This field is required';

  @Input()
  hint: string;

  @Input()
  floatLabelValue = 'never';

  @Input()
  state;

  @Input()
  disabled = false;

  inputText: string | number;

  ngControl: NgControl;

  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  constructor(private inj: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }

  writeValue(newModel: string | number): void {
    this.inputText = newModel;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange($event: any): void {
    const value = $event.target.value;
    this.inputText = value;
    this.onChange(value);
  }

  inputBlur($event): void {
    this.onTouched();
  }
}
