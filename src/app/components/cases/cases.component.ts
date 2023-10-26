import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../services/cases/cases.service';


@Component({
	selector: "app-cases",
	templateUrl: "./cases.component.html",
	styleUrls: ["./cases.component.css"],
})
export class CasesComponent implements OnInit {
  casesData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCases().subscribe(data => {
      this.casesData = data;
      console.log(this.casesData);
    });
  }
}
