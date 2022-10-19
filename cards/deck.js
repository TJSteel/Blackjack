import { Card, suits } from './card';

export class Deck {
  deckCount;
  cards = [];
  constructor(deckCount) {
    this.deckCount = deckCount;
    this.createDeck();
  }
  createDeck() {
    let deckCount = this.deckCount;
    this.cards = [];
    while (deckCount > 0) {
      for (let value = 1; value < 14; value++) {
        for (const suit of suits) {
          const card = new Card(value, suit);
          this.cards.push(card);
        }
      }
      deckCount--;
    }
  }
  getCard() {
    if (this.cards.length == 0) {
      throw new Error('No cards left in the deck');
    }
    let rnd = Math.floor(Math.random() * (this.cards.length - 1));
    return this.cards.splice(rnd, 1)[0];
  }
  getCards(count) {
    const cards = [];
    while (count > 0) {
      cards.push(this.getCard());
      count--;
    }
    return cards;
  }
}
