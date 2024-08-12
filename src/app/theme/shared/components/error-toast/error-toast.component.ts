import {Component} from '@angular/core';
import {ToastPackage, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-error-toast',
  standalone: true,
  imports: [],
  templateUrl: './error-toast.component.html',
  styleUrl: './error-toast.component.css'
})
export class ErrorToastComponent {

  id: string = new Date().getTime().toString()

  constructor(public toastPackage: ToastPackage, private toastrService: ToastrService) {
    setTimeout(() => {
      let closeBtn = document.getElementById(this.id)
      if (closeBtn) closeBtn.click()
    }, 5000)
  }


}
