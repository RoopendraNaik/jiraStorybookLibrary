import { ButtonComponent } from "./button.component";
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, number, text, withKnobs, button,color  } from '@storybook/addon-knobs';

var props;
storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            declarations: [ButtonComponent],
            entryComponents: [ButtonComponent],
        })
    )
    // .add('With Knobs', () => {

    //     return {
    //         template: `<app-ui-button [text]="text" [bgcolor]="color" state="default"></app-ui-button>`,
    //         props: {
    //             text: text('Button text', 'Hello Button'),
    //             color : color('Button Background Colour', 'white')
    //           }
           
    //     }
    // }
    // )
    .add('Default', () => {
        return {
            template: `<ui-button text="Button" state="default"></ui-button>`,
        }
    })
    .add('Hover', () => {
        return {
            template: `<ui-button text="Button" state="hover"></ui-button>`,
        }
    })
    .add('Focus', () => {
        return {
            template: `<ui-button text="Button" state="focus"></ui-button>`,
        }
    })
    .add('Disabled', () => {
        return {
            template: `<ui-button text="Button" state="disabled"></ui-button>`,
        }
    })
    .add('Knobs', () => {

        return {
            template: `<ui-button [text]="text" [bgcolor]="color" state="default"></ui-button>`,
            props: {                
                color : color('Button Background Colour', 'white'),
                text: text('Button text', 'Button Text'),
              }
           
        }
    }
    )
