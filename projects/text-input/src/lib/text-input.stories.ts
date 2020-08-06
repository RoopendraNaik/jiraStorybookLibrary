import { TextInputComponent } from './text-input.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// export default {
//     title : 'Input field',
//     decorators: [
//         moduleMetadata({
//           declarations: [ TextfieldComponent ],
//           imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
//         }),
//     ],
// };

// export const defaultState = () => ({
//     component: TextfieldComponent,
//     props: {
//         label: 'First Name',
//         placeholder: 'e.g Rahul'
//     }
// });
storiesOf('Text-Field', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TextInputComponent],
      entryComponents: [TextInputComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    })
  )
  .add('Default', () => {
    return {
      template: `<ui-text-input hint="Assistive Text" label="Overline Label"></ui-text-input>`,
    };
  })
  .add('Focused', () => {
    return {
      template: `<ui-text-input hint="Assistive Text" label="Overline Label" floatLabelValue="always"></ui-text-input>`,
    };
  })
  .add('Focused with PlaceHolder Text', () => {
    return {
      template: `<ui-text-input hint="Assistive Text" label="Overline Label" floatLabelValue="always" placeholder="e.g placeholder"></ui-text-input>`,
    };
  })
  .add('Focused with Input', () => {
    return {
      template: `<ui-text-input state="Focused with Input" hint="Assistive Text" label="Overline Label" floatLabelValue="always"></ui-text-input>`,
    };
  })
  .add('Default Error', () => {
    return {
      template: `<ui-text-input state="Default Error"></ui-text-input>`,
    };
  })
  .add('Focused Error', () => {
    return {
      template: `<ui-text-input state="Focused Error" label="OverLine Label" ></ui-text-input>`,
    };
  })
  .add('Disabled', () => {
    return {
      template: `<ui-text-input state="Disabled" hint="Assistive Text"></ui-text-input>`,
    };
  });
