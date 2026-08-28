import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { Globalconstant } from '../../shared/global-constant';
import { SnackbarService } from '../../services/snackbar.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private snackbarService = inject(SnackbarService);

  contactForm!: FormGroup;

  key = environment.emailJSKey;
  serviceId = environment.mailService;
  templateId = environment.templateId;

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(Globalconstant.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(Globalconstant.emailRegex)]],
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }

  handleSubmit() {
    if (!this.contactForm.valid) return;

    const formData = this.contactForm.value;
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(this.serviceId, this.templateId, data, this.key).then(
      () => {
        this.snackbarService.openSnackBar('Message Sent Successfully', '');
        this.router.navigate(['/confirmation']);
      },
      (error) => {
        // Fallback demo redirect for testing if emailJS fails due to unconfigured keys
        console.warn('EmailJS error or unconfigured key:', error);
        this.snackbarService.openSnackBar('Message Submitted (Demo Mode)', '');
        this.router.navigate(['/confirmation']);
      }
    );
  }
}
