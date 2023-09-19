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

  //NOTE - ngOnInit
  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, this.noNumberValidator]],
      empresa: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, this.phoneValidator]],
      descricao: ['', Validators.required]
    });
  }

  //NOTE - noNumberValidator
  noNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { 'hasNumber': true } : null;
  }

  //NOTE - phoneValidator
  phoneValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const pattern = /^\(\d{2}\) (9 )?\d{4}-\d{4}$/;
    return !pattern.test(control.value) ? { 'invalidPhone': true } : null;
  }

  //NOTE - onSubmit
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData);
    }
  }
}
