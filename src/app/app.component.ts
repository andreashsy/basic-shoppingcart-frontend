import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart-frontend';
  fontSize = "1em";
  greetings = "Hello!"
  fontSizeChanged($event: any) {
    this.fontSize = `${$event.target.value}em`;
  }

  receiveAddApple(applesToAdd: number) {
    this.numberOfApples += applesToAdd
    this.updateLength()
  }

  receiveAddBanana(bananasToAdd: number) {
    this.numberOfBananas += bananasToAdd
    this.updateLength()
  }

  receiveAddOrange(orangesToAdd: number) {
    this.numberOfOranges += orangesToAdd
    this.updateLength()
  }

  receiveAddPear(pearsToAdd: number) {
    this.numberOfPears += pearsToAdd
    this.updateLength()
  }

  removeApple() {
    this.numberOfApples -= 1
    this.updateLength()
  }

  removeBanana() {
    this.numberOfBananas -= 1
    this.updateLength()
  }

  removeOrange() {
    this.numberOfOranges -= 1
    this.updateLength()
  }

  removePear() {
    this.numberOfPears -= 1
    this.updateLength()
  }

  updateLength() {
    this.length = this.numberOfApples + this.numberOfBananas + this.numberOfOranges + this.numberOfPears
  }
// cart below, to be refactored into new component later
  appleSrc = "assets/apple.jpg";
  appleName = "Apple";
  bananaSrc = "assets/banana.jpg";
  bananaName = "Banana";
  orangeSrc = "assets/orange.jpg";
  orangeName = "Orange";
  pearSrc = "assets/pear.jpg";
  pearName = "Pear";

  numberOfApples = 0;
  numberOfBananas = 0;
  numberOfOranges = 0;
  numberOfPears = 0;
  length = 0;
}
