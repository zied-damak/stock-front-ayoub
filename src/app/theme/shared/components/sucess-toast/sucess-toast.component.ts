import {Component} from '@angular/core';
import {ToastPackage, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sucess-toast',
  standalone: true,
  imports: [],
  templateUrl: './sucess-toast.component.html',
  styleUrl: './sucess-toast.component.css'
})
export class SucessToastComponent {

  id: string = new Date().getTime().toString()

  constructor(public toastPackage: ToastPackage, private toastrService: ToastrService) {
    setTimeout(() => {
      let closeBtn = document.getElementById(this.id)
      if (closeBtn) closeBtn.click()
    }, 5000)
  }


}
