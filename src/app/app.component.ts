import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentNumberOfApples = 0;
  parentNumberOfBananas = 0;
  parentNumberOfOranges = 0;
  parentNumberOfPears = 0;

  updateApple(applesToAdd: number) {
    this.parentNumberOfApples += applesToAdd
  }

  updateBanana(bananasToAdd: number) {
    this.parentNumberOfBananas += bananasToAdd
  }

  updateOrange(orangesToAdd: number) {
    this.parentNumberOfOranges += orangesToAdd
  }

  updatePear(pearsToAdd: number) {
    this.parentNumberOfPears += pearsToAdd
  }

}
