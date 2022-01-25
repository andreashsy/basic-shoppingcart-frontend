import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit {
  appleSrc = "assets/apple.jpg";
  appleName = "Apple";
  bananaSrc = "assets/banana.jpg";
  bananaName = "Banana";
  orangeSrc = "assets/orange.jpg";
  orangeName = "Orange";
  pearSrc = "assets/pear.jpg";
  pearName = "Pear";

  products = [{name: "Apple", src: "assets/apple.jpg"},
              {name: "Banana", src: "assets/banana.jpg"},
              {name: "Orange", src: "assets/orange.jpg"},
              {name: "Pear", src: "assets/pear.jpg"}]

  @Output() onAddApple = new EventEmitter<number>();
  @Output() onAddBanana = new EventEmitter<number>();
  @Output() onAddOrange = new EventEmitter<number>();
  @Output() onAddPear = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  addApple() {
    this.onAddApple.emit(1)
  }

  addBanana() {
    this.onAddBanana.emit(1)
  }

  addOrange() {
    this.onAddOrange.emit(1)
  }

  addPear() {
    this.onAddPear.emit(1)
  }

}
