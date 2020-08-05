import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() placeholder = "";
  @Input() label = "Label";
  @Input() type = "text";
  @Input() FormControlName: FormControl;
  @Input() errorMessage = "This field is required";
  @Input() hint: string;
  @Input() floatLabelValue = "never";
  // @Input() inputText = "";
  // @Input() isDisabled = false;
  // @Input() hasError: boolean;
  @Input() state;
  inputText: string;
  isDisabled: boolean;
  hasError: boolean;

  errorForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.errorForm = this.fb.group({
      inputField: ['', Validators.required]
    })
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }


  ngOnInit(): void {

    console.log('---state is');
    console.log(this.state);
    switch(this.state){
      case 'Focused with Input':
        this.inputText = "Input Text";
        break;
      case 'Disabled':
          this.isDisabled = true;
          if(this.FormControlName) this.FormControlName.disable();
          break;
      case 'Focused Error':
        this.hasError = true;
        this.floatLabelValue = "always";
        break;
      case 'Default Error':
          this.hasError = true;
          break;
    }

    if(this.hasError){
      this.markFormGroupTouched(this.errorForm);
    }
  }
}
