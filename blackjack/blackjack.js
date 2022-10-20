import { Table } from './table';

const table = new Table();

table.dealHand();

let playerValue = table.player.getHandValue();
while (playerValue > 0 && playerValue < 17) {
  table.player.getCard(table.deck);
  playerValue = table.player.getHandValue();
}

let dealerValue = table.dealer.getHandValue();
while (dealerValue > 0 && dealerValue < 17) {
  table.dealer.getCard(table.deck);
  dealerValue = table.dealer.getHandValue();
}

table.printResult();
