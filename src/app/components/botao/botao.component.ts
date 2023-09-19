import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-botao",
	templateUrl: "./botao.component.html",
	styleUrls: ["./botao.component.css"],
})
export class BotaoComponent {
	@Input() texto!: string;
	@Input() width!: string;
	@Input() height!: string;
	@Input() fontSize!: string;

	@Output() aoClicar: EventEmitter<void> = new EventEmitter<void>();
	onClick() {
		this.aoClicar.emit();
	}
}
