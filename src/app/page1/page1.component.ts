import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
	id: string;
	constructor(private route: ActivatedRoute) { 
		route.paramMap.subscribe(params => this.id = params.get('id'));
		 console.log(this.id);
	}

	ngOnInit() {
	}

}
