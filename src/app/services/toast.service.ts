import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { SucessToastComponent } from '../theme/shared/components/sucess-toast/sucess-toast.component';
import { ErrorToastComponent } from '../theme/shared/components/error-toast/error-toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService
  ) {
  }

  success(title: string) {
    this.toastr.success("", title, {
      toastComponent: SucessToastComponent,
    });
  }

  error(title: string) {
    this.toastr.success("", title, {
      toastComponent: ErrorToastComponent,
    });
  }

}
