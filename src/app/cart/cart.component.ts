import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Input() cartNumberOfApples: any;
  @Input() cartNumberOfBananas: any;
  @Input() cartNumberOfOranges: any;
  @Input() cartNumberOfPears: any;

  @Output() onRemoveApple = new EventEmitter<number>();
  @Output() onRemoveBanana = new EventEmitter<number>();
  @Output() onRemoveOrange = new EventEmitter<number>();
  @Output() onRemovePear = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  removeApple() {
    this.onRemoveApple.emit(-1)
  }

  removeBanana() {
    this.onRemoveBanana.emit(-1)
  }

  removeOrange() {
    this.onRemoveOrange.emit(-1)
  }

  removePear() {
    this.onRemovePear.emit(-1)
  }

}
