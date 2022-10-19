export class Player {
  cards = [];
  constructor() {}

  getCard(deck) {
    this.cards.push(deck.getCard());
  }
  getCards(deck, count) {
    while (count > 0) {
      this.getCard(deck);
      count--;
    }
  }
  getHandValue() {
    let value = this.cards.reduce((acc, card) => acc + card.getValue(), 0);
    let aces = this.cards.filter((card) => card.value === 1).length;
    while (value > 21 && aces > 0) {
      value -= 10;
      aces--;
    }

    // if we return 21 then a hand value of 21 containing more than 2 cards would equal blackjack which is inaccurate
    if (this.cards.length === 2 && value === 21) {
      return 22;
    }

    // if bust return negative so that we can still display what the bust value was
    if (value > 21) {
      return value * -1;
    }

    return value;
  }
  printHandValue() {
    const value = this.getHandValue();
    if (value === 22) {
      console.log('Blackjack!');
    } else if (value < 0) {
      console.log(`Bust with a value of ${value * -1}`);
    } else {
      console.log(value);
    }
  }
}
