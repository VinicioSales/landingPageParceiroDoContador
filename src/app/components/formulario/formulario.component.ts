import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	Validators,
	AbstractControl,
} from "@angular/forms";
import { LeadsService } from "../../services/leads/leads.service";

@Component({
	selector: "app-formulario",
	templateUrl: "./formulario.component.html",
	styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
	form!: FormGroup;

	constructor(private fb: FormBuilder, private leadsService: LeadsService) {}

	//NOTE - ngOnInit
	ngOnInit() {
		this.form = this.fb.group({
			nome: ["", [Validators.required, this.noNumberValidator]],
			empresa: ["", Validators.required],
			email: ["", [Validators.required, Validators.email]],
			telefone: ["", [Validators.required]],
			descricao: [""],
		});
	}

	//NOTE - noNumberValidator
	noNumberValidator(
		control: AbstractControl
	): { [key: string]: boolean } | null {
		const hasNumber = /\d/.test(control.value);
		return hasNumber ? { hasNumber: true } : null;
	}

	//NOTE - phoneValidator
	phoneValidator(
		control: AbstractControl
	): { [key: string]: boolean } | null {
		const pattern = /^\(\d{2}\) (9 )?\d{4}-\d{4}$/;
		return !pattern.test(control.value) ? { invalidPhone: true } : null;
	}

	//NOTE - onSubmit
	onSubmit() {
		console.log("this.form.value", this.form.value);
		const formValue = this.form.value;
		this.leadsService.createLead(formValue).subscribe(
			(response) => {
				console.log("Lead criado com sucesso!", response);
				// Aqui, você pode adicionar lógica adicional, como redirecionar o usuário ou mostrar uma mensagem de sucesso.
			},
			(error) => {
				console.error("Erro ao criar lead:", error);
				// Aqui, você pode adicionar lógica de tratamento de erro.
			}
		);
		this.form.reset();
	}
}
