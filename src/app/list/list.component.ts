import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  urlMatrix: string = ''
  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe((url: UrlSegment[]) => {
      let urlPart = url[0];
      let urlMatrix = urlPart.parameters;
      this.urlMatrix = JSON.stringify(urlMatrix)
    }) 
  }

  changeMatrix() {
    this.router.navigate(['/list', { id: 2}])
  }

  removeMatrix() {
    this.router.navigate(['/list'])
  }

  addMatrix() {
    this.router.navigate(['/list', { uid: 1}])
  }
}
