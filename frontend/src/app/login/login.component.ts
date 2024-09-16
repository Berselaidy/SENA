import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Importa ReactiveFormsModule directamente
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario enviado', this.loginForm.value);
      // Aquí puedes manejar la lógica de autenticación, como enviar los datos a un servidor
    } else {
      console.log('El formulario es inválido');
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}
