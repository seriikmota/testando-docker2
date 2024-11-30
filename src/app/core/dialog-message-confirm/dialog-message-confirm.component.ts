import {Component, Inject} from '@angular/core';
import {DataMessageConfirm} from "../data-message-confirm";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-message-confirm',
  templateUrl: './dialog-message-confirm.component.html',
  styleUrls: ['./dialog-message-confirm.component.scss']
})
export class DialogMessageConfirmComponent {
  public dataConfirm : DataMessageConfirm;
  constructor(
    private dialogRef: MatDialogRef<DialogMessageConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: DataMessageConfirm)
  {
    this.dataConfirm = data;
    this.dataConfirm.message = this.dataConfirm.message.replace("\n","<br\>\n");
  }

  ok() {
    if(this.dataConfirm.okAction !== null && this.dataConfirm.okAction !== undefined){
      this.dataConfirm.okAction();
    }
    this.dialogRef.close();
  }

  cancel() {
    if(this.dataConfirm.cancelAction !== null && this.dataConfirm.cancelAction !== undefined){
      this.dataConfirm.cancelAction();
    }
    this.dialogRef.close();
  }
}
