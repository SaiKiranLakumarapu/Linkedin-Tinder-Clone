import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { MemberEditComponent } from '../member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard {

  constructor(private _confirmService: ConfirmService) {}

 
  
}
