const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
class Card {
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
  print() {
    console.log(`${this.getValueName()} of ${this.suit}`);
  }
}

class Deck {
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

const deck = new Deck(1);
const playerCards = deck.getCards(2);
for (const card of playerCards) {
  card.print();
}
