import { Deck } from '../cards/deck';
import { Player } from './player';

const deck = new Deck(1);
const player = new Player();

player.getCards(deck, 2);

for (const card of player.cards) {
  card.print();
}

player.printHandValue();
