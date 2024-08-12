import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { AuthenticationRequest } from '../../../../model/auth/authentication-request';
import { AuthenticationResponse } from '../../../../model/auth/authentication-response';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export default class AuthLoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string>(null, [Validators.required, Validators.email]),
    password: new FormControl<string>(null, Validators.required)
  });

  onSubmit() {
    if (this.loginForm.valid) {
      let authenticationRequest: AuthenticationRequest = { ...this.loginForm.value };
      this.authService.login(authenticationRequest).subscribe({
        next: (data: AuthenticationResponse) => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.toastService.success('Welcome');
          this.toastService.error('Email ou mot de passe incorrecte');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
