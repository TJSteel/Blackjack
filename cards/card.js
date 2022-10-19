export const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

export class Card {
  value;
  suit;
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  getValueName() {
    switch (this.value) {
      case 1:
        return 'Ace';
      case 11:
        return 'Jack';
      case 12:
        return 'Queen';
      case 13:
        return 'King';
      default:
        return '' + this.value;
    }
  }
  getValue() {
    if (this.value === 1) {
      return 11;
    } else if (this.value > 10) {
      return 10;
    } else {
      return this.value;
    }
  }
  print() {
    console.log(`${this.getValueName()} of ${this.suit}`);
  }
}
