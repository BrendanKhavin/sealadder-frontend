import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
      <h3> Page Not Found </h3>
  `,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  router: any;

  constructor(router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate('/homepage');
  }

}
