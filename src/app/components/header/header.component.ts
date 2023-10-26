import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';



@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
	isScrolled = false;

	constructor(@Inject(DOCUMENT) private document: Document) {}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		const yOffset = window.pageYOffset;
		const scrollTop =
			yOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;

		if (scrollTop > 100) {
			// algumValor é o valor de scroll que você quer para a mudança acontecer
			this.isScrolled = true;
		} else {
			this.isScrolled = false;
		}
	}

	scrollToSection(sectionId: string): void {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest",
			});

			
		}
	}

	scrollToHome(): void {
		const homeSection = this.document.getElementById('home');
		homeSection?.scrollIntoView({ behavior: 'smooth' })
	}
}
