import {Component, style, animate, transition, trigger} from "@angular/core";
import {NotificationService} from "./notification.service";
/**
 * Created by loi on 11/11/16.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.css' ],
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
export class ModalComponent {

  public visible = false;
  private visibleAnimate = false;
  private count : number = 1;

  constructor(private notificationService : NotificationService) {}

  public show(): void {
    this.count++;
    this.notificationService.message = "New Message " + this.count;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
}
