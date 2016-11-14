/**
 * Created by loi on 11/13/16.
 */
import {Component, style, animate, transition, trigger} from "@angular/core";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: [ './confirmation.component.css' ],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ConfirmationComponent {

  public visible = false;
  private visibleAnimate = false;
  public callbackResult : (boolean) => void;

  constructor(private notificationService : NotificationService) {
  }

  public show(outerThis : ConfirmationComponent): void {
    outerThis.visible = true;
    setTimeout(() => outerThis.visibleAnimate = true);
  }

  public yesClick(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    this.callbackResult(true);
  }

  public noClick(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    this.callbackResult(false);
  }
}
