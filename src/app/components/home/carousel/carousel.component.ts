import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    'assets/images/adidasnew.jpg',
    'assets/images/lebron.jpg',
    'assets/images/airmax.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
