import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // @Input() state: string;

  @Input() text: string;
  @Input() bgcolor: string;
  @Input() state = "default";
  // @Input() fun = () => {
  //   console.log("clicked");
  // }
  // @Output() clickFn = new EventEmitter<MouseEvent>();

  disabled = false;
  constructor() { }

  ngOnInit(): void {

    switch (this.state) {
      case "default":
        break;

      case "hover":
        document.getElementById('InvsionBtn').classList.add("hover");
        break;

      case "focus":
        document.getElementById('InvsionBtn').classList.add("focus");
        break;

      case "disabled":
        this.disabled = true;
        document.getElementById('InvsionBtn').classList.add("disabled");
        break;

      default:
        break;
    }
  }

  ngOnChanges() {
    document.getElementById('InvsionBtn').style.backgroundColor = this.bgcolor;
    console.log('---inside ngOnchanges');
    console.log(this.bgcolor);
  }
  // clickHandler(event: MouseEvent) {
  //   console.log("i am in ");

  //   if (!this.disabled) {
  //     this.clickFn.emit(event);
  //     this.fun;
  //   }
  // }
}
