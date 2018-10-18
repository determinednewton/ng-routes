import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {
  url: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.url = queryParams['target'];
    });
    // this.url = this.activatedRoute.snapshot.queryParams['target'];
  }

  ngOnInit() {
  }

}
