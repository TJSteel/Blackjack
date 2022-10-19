import { Deck } from '../cards/deck';

const deck = new Deck(1);
const playerCards = deck.getCards(2);
let value = 0;
for (const card of playerCards) {
  card.print();
  value += card.getValue();
}
console.log(`Value: ${value}`);
