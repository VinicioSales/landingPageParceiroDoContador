import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../services/cases/cases.service';


@Component({
	selector: "app-cases",
	templateUrl: "./cases.component.html",
	styleUrls: ["./cases.component.css"],
})
export class CasesComponent implements OnInit {
	textoCase1: string =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
	imgCase1: string = "assets/img/dados.png";
	imgCase2: string = "assets/img/dados.png";
	imgCase3: string = "assets/img/dados.png";

  // casesData = [
  //   {media: "assets/img/dados.png", mensagem: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  //   {media: "assets/img/dados.png", mensagem: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  //   {media: "assets/img/dados.png", mensagem: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  // ]
  casesData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCases().subscribe(data => {
      this.casesData = data;
      console.log(this.casesData);
    });
  }
}
