var UI = require('ui');
var Accel = require('ui/accel');
var card = new UI.Card({
    title:'Gamification Cards',
    subtitle:'Loading...',
  style:"small",
  scrollable:true
});
card.show();

var cardsObj = { cards : [{
			category : "Socialiser",
			title : "Guilds / Teams",
			img : "49_GUILDS",
			desc : "Let people build close-knit guilds or teams. Small groups can be much more effective than large sprawling ones. Create platforms for collaboration but also pave the way for team based competitions."
			},{
			category : "Socialiser",
			title : "Social Network",
			img : "SOCIALNETWORK",
			desc : "Allow people to connect and be social with an easy to use and accessibile social netwok. It is can be more fun to play with other people than to play on your own. "
			}]};

var r=0;
function loadCard(r){
  card.title(cardsObj.cards[r].category);
  card.subtitle(cardsObj.cards[r].title);
  card.banner(cardsObj.cards[r].img);
  card.body(cardsObj.cards[r].img+' ' +cardsObj.cards[r].desc);

}

function loadRandomCard(){
  r=Math.floor(Math.random() * cardsObj.cards.length) + 1; 
  loadCard(r);
}

Accel.init();

card.on('click', function(e) {
  r++;
  if(e.button=='select'){
    if(r==cardsObj.cards.length){
      r=0;
    }
    
    loadCard(r);
  }
});

card.on('accelTap', function(e) {
  loadRandomCard();
});


loadCard(0);

