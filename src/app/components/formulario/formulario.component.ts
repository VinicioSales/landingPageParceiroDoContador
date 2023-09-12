import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, this.noNumberValidator]],
      empresa: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, this.phoneValidator]],
      descricao: ['', Validators.required]
    });
  }

  noNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log("noNumberValidator");
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { 'hasNumber': true } : null;
  }

  phoneValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log("phoneValidator");
    const pattern = /^\(\d{3}\) \d \d{4}-\d{4}$/;
    return !pattern.test(control.value) ? { 'invalidPhone': true } : null;
  }

  onSubmit() {
    console.log("onSubmit");
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData);
      // Processe os dados do formulário aqui
    }
  }
}
