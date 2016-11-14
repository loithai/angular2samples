import {Injectable} from "@angular/core";
/**
 * Created by loi on 11/11/16.
 */

@Injectable()
export class NotificationService {
  public title : string = "Hello Loi";
  public message : string = "Dialog Message";
  public callbackOpen : (any) => void;
  public caller : any;

  constructor() {}

  public showConfirmation(modalClass : any, title : string, message : string, caller : any) : void {
    this.title = title;
    this.message = message;
    this.callbackOpen(modalClass);
    this.caller = caller;
  }

  public showWarning(modalClass : any, title : string, message : string, caller : any) : void {
    this.title = title;
    this.message = message;
    this.callbackOpen(modalClass);
    this.caller = caller;
  }


}
