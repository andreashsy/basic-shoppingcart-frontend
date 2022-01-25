import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  appleSrc = "assets/apple.jpg";
  appleName = "Apple";
  bananaSrc = "assets/banana.jpg";
  bananaName = "Banana";
  orangeSrc = "assets/orange.jpg";
  orangeName = "Orange";
  pearSrc = "assets/pear.jpg";
  pearName = "Pear";

  numberOfApples = [(0)];
  numberOfBananas = [(0)];
  numberOfOranges = [(0)];
  numberOfPears = [(0)];
  length = 1;

  @Input() meAddApple = "";
  constructor() { }

  ngOnInit(): void {
  }

}
