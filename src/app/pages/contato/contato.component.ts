import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import emailjs from '@emailjs/browser';
import { enviroment } from '../../../enviroments/enviroment';
import { SnackbarService } from '../../core/services/snackbar.service';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { ProgressSpinnerComponent } from '../../shared/components/progress-spinner/progress-spinner.component';

@Component({
  selector: 'app-contato',
  imports: [
    ContainerComponent,
    BannerComponent,
    ReactiveFormsModule,
    CommonModule,
    ProgressSpinnerComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  isLoading = signal(false);
  contactForm: FormGroup;

  serviceId = enviroment.emailjsServiceId;
  templateId = enviroment.emailjsTemplateId;
  publicKey = enviroment.emailjsPublicKey;

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        reply_to: this.contactForm.value.email,
      };

      this.isLoading.set(true);

      emailjs
        .send(this.serviceId, this.templateId, templateParams, this.publicKey)
        .then(() => {
          this.isLoading.set(false);
          this.snackbarService.show('Mensagem enviada com sucesso');
          this.contactForm.reset();

          Object.keys(this.contactForm.controls).forEach((key) => {
            const control = this.contactForm.get(key);
            control?.setErrors(null);
            control?.markAsUntouched();
            control?.markAsPristine();
          });
        })
        .catch((err) => {
          console.log(err);
          this.isLoading.set(false);
          this.snackbarService.show('Erro ao enviar mensagem!');
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
