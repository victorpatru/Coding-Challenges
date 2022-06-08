/* 8KYU Define a card suit

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/


function defineSuit(card) {
    // good luck
    switch(card.slice(-1)) {
        case '♣':
          return 'clubs'
          break;
        case '♦':
          return 'diamonds'
          break
        case '♥':
          return 'hearts'
          break
        case '♠':
          return 'spades'
          break
    }
}