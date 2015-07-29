var UI = require('ui');
var Accel = require('ui/accel');

var ajax = require('ajax');

var URL="cards.js";
var card = new UI.Card({
    title:'Gamification Cards',
    subtitle:'Loading...',
  style:'small'
});
card.show();
ajax({ url: URL, type: 'json' }, function(data) {
    var cardName = data.cards[10].name;
    card.subtitle(cardName);
    card.banner(cardName);
    card.show();
});