import { Deck } from '../cards/deck';
import { Player } from './player';

export class Table {
  deck;
  dealer;
  players;
  constructor() {
    this.deck = new Deck(8);
    this.dealer = new Player('Dealer');
    this.player = new Player('Player');
  }

  dealHand() {
    for (let i = 0; i < 2; i++) {
      this.player.getCard(this.deck);
      this.dealer.getCard(this.deck);
    }
  }

  printResult() {
    this.dealer.printHand();
    this.player.printHand();
    const dealerValue = this.dealer.getHandValue();
    const playerValue = this.player.getHandValue();
    if (playerValue > dealerValue) {
      console.log('Player Wins');
    } else if (playerValue == dealerValue) {
      console.log("It's a tie");
    } else {
      console.log('Player Loses');
    }
  }
}
