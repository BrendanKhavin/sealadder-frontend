import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
      <h3> Page Not Found </h3>
  `,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
