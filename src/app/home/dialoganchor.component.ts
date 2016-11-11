import {Directive, HostListener} from "@angular/core";
import {NotificationService} from "./notification.service";
/**
 * Created by loi on 11/10/16.
 */

@Directive({ selector: '[dialogAnchor]'
})

export class DialogAnchorDirective {
  private counter : number;
  constructor(
    private notifcationService : NotificationService
  ) {
    this.counter = 1;
  }

  @HostListener('click') showMessage() {
    this.counter ++;
    this.notifcationService.title = 'Hello Directive ' + this.counter;
    console.log('Hello Directive ' + this.counter); }

}
