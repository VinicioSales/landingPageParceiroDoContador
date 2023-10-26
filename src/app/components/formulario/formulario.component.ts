import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	Validators,
	AbstractControl,
} from "@angular/forms";
import { LeadsService } from "../../services/leads/leads.service";
import { interval, Subscription } from "rxjs";
import { ChangeDetectorRef } from "@angular/core";

@Component({
	selector: "app-formulario",
	templateUrl: "./formulario.component.html",
	styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
	form!: FormGroup;
	linha1Glow = false;
	linha2Glow = false;
	linha3Glow = false;

	private subscription!: Subscription;

	constructor(
		private fb: FormBuilder,
		private leadsService: LeadsService,
		private cdRef: ChangeDetectorRef
	) {}

	//NOTE - ngOnInit
	ngOnInit() {
		const source = interval(400);
		this.subscription = source.subscribe((count) => {
			switch (count % 3) {
				case 0:
					this.linha1Glow = !this.linha1Glow;
					break;
				case 1:
					this.linha2Glow = !this.linha2Glow;
					break;
				case 2:
					this.linha3Glow = !this.linha3Glow;
					break;
			}
		});

		this.form = this.fb.group({
			nome: ["", [Validators.required, this.noNumberValidator]],
			empresa: ["", Validators.required],
			email: ["", [Validators.required, Validators.email]],
			telefone: ["", [Validators.required]],
			descricao: [""],
		});
	}

	//NOTE - ngOnDestroy
	ngOnDestroy() {
		this.subscription.unsubscribe();
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

	feedbackMessage: string = "";
	feedbackType: "success" | "error" | null = null;

	onSubmit() {
		console.log("subtimi")
		if (!this.form.valid) {
			// Identificando qual campo obrigatório está vazio ou inválido.
			if (this.form?.get('nome')?.hasError('required')) {
				alert("Campo Nome é obrigatório.");
			} else if (this.form?.get('empresa')?.hasError('required')) {
				alert("Campo Empresa é obrigatório.");
			} else if (this.form?.get('email')?.hasError('required')) {
				alert("Campo E-mail é obrigatório.");
			} else if (this.form?.get('telefone')?.hasError('required')) {
				alert("Campo Telefone é obrigatório.");
			} else {
				alert("Por favor, preencha todos os campos obrigatórios corretamente.");
			}
		} else {
			if (!this.form.valid) {
				alert("Por favor, preencha todos os campos obrigatórios corretamente.");
				console.log(this.form);
			} else {
				const formValue = this.form.value;
		
				this.leadsService.createLead(formValue).subscribe(
					(response) => {
						alert("Mensagem enviada com sucesso! Aguarde nosso contato.");
						console.log(response);
						this.form.reset();
					},
					(error) => {
						console.log(error);
						if (error.status === 409) {
							alert("Email já está registrado!");
						} else {
							alert("Ocorreu um erro inesperado! Tente novamente.");
						}
					}
				);
			}
		}
	}
	
}
