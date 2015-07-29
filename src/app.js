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
			img : "IMAGES_49_GUILDS_PNG",
			desc : "Let people build close-knit guilds or teams. Small groups can be much more effective than large sprawling ones. Create platforms for collaboration but also pave the way for team based competitions."
			},{
			category : "Socialiser",
			title : "Social Network",
			img : "IMAGES_50_SOCIAL_NETWORK_PNG",
			desc : "Allow people to connect and be social with an easy to use and accessibile social netwok. It is can be more fun to play with other people than to play on your own. "
			},{
			category : "Socialiser",
			title : "Social Status",
			img : "IMAGES_51_SOCIAL_STATUS_PNG",
			desc : "Status can lead to greater visibility for people, creating opportunities to create new relationships. It can also feel good. You can make use of feedback mechanics such as leaderboards and certificates."
			},{
			category : "Socialiser",
			title : "Social Discovery",
			img : "IMAGES_52_SOCIAL_DISCOVERY_PNG",
			desc : "A way to find people and be found is a essential to building new relationships. Matching people based on interests and status can all help get people started."
			},{
			category : "Socialiser",
			title : "Social Pressure",
			img : "IMAGES_53_SOCIAL_PRESSURE_PNG",
			desc : "People often don't like feeling they are the odd one out. In a social environment this can be used to encourage people to be like their friends. Can demotivate if expectations are unrealistic."
			},{
			category : "Socialiser",
			title : "Competition",
			img : "IMAGES_54_COMPETITION_PNG",
			desc : "Competition gives people a chance to prove themselves against others. It can be a way to win rewards, but can also be a place where new friendships and relationships are born."
			},{
			category : "Schedules",
			title : "Random Rewards",
			img : "IMAGES_10_RANDOM_REWARDS_PNG",
			desc : "Surprise and delight people with unexpected rewards. Keep them on their toes and maybe even make them smile. "
			},{
			category : "Schedules",
			title : "Fixed Reward Schedule",
			img : "IMAGES_11_FIXED_REWARD_SCHEDULE_PNG",
			desc : "Reward people based on defined actions and events. First activity, level up, progression. Useful during on-boarding and to celebrate milestone events. "
			},{
			category : "Schedules",
			title : "Time Dependent Rewards",
			img : "IMAGES_12_TIME_DEPENDENT_PNG",
			desc : "Events that happen at specific times (birthdays etc.) or are only available for set period of time (e.g. come back each day for a reward). Users have to be there to benefit."
			},{
			category : "Player",
			title : "Points / Experience Points (XP)",
			img : "IMAGES_43_POINTS_PNG",
			desc : "Points and XP are feedback mechanics. Can track progress, as well as  be used as a way to unlock new things. Award based on achievement or desired behaviour."
			},{
			category : "Player",
			title : "Physical Rewards / Prizes",
			img : "IMAGES_44_PRIZES_PNG",
			desc : "Physical rewards and prizes can promote lots of activity and when used well, can create engagement. Be careful of promoting quantity over quality."
			},{
			category : "Player",
			title : "Leaderboards / Ladders",
			img : "IMAGES_45_LEADERBOARDS_PNG",
			desc : "Leaderboards come in different flavours, most commonly relative or absolute. Commonly used to show people how they compare to others and so others can see them. Not for everyone."
			},{
			category : "Player",
			title : "Badges / Achievements",
			img : "IMAGES_46_BADGES_PNG",
			desc : "Badges and achievements are a form of feedback. Award them to people for accomplishments. Use them wisely and in a meaningful way to make them more  appreciated."
			},{
			category : "Player",
			title : "Virtual Economy",
			img : "IMAGES_47_VIRTUAL_ECONOMY_PNG",
			desc : "Create a virtual economy and allow people to spend their virtual currency on real or virtual goods. Look into the legalities of this type of system and consider the long term financial costs!"
			},{
			category : "Player",
			title : "Lottery / Game of Chance",
			img : "IMAGES_48_LOTTERY_PNG",
			desc : "Lotteries and games of chance are a way to win rewards with very little effort from the user. You have to be in it, to win it though!"
			},{
			category : "Philanthropists",
			title : "Meaning /  Purpose",
			img : "IMAGES_19_MEANING_PNG",
			desc : "Some just need to understand the meaning or the purpose of what they are doing (epic or otherwise). For others they need to feel they are part of something greater than themselves."
			},{
			category : "Philanthropists",
			title : "Care-taking",
			img : "IMAGES_20_CARE_TAKING_PNG",
			desc : "Looking after other people can be very fulfilling. Create roles for administrators, moderators, curators etc. Allow users to take a parental role."
			},{
			category : "Philanthropists",
			title : "Access",
			img : "IMAGES_21_ACCESS_PNG",
			desc : "Access to more features and abilities in a system can give people more ways to help others and to contribute. It also helps make them feel valued. More meaningful if earned."
			},{
			category : "Philanthropists",
			title : "Collect & Trade",
			img : "IMAGES_22_COLLECT_PNG",
			desc : "Many people love to collect things. Give them a way to collect and trade items in your system. Helps build relationships and feelings of purpose and value."
			},{
			category : "Philanthropists",
			title : "Gifting /  Sharing",
			img : "IMAGES_23_GIFTING_PNG",
			desc : "Allow gifting or sharing of items to other people to help them achieve their goals. Whilst a form of altruism, the potential for reciprocity can a strong motivator."
			},{
			category : "Philanthropists",
			title : "Sharing Knowledge",
			img : "IMAGES_24_KNOWLEDGE_PNG",
			desc : "For some, helping other people by sharing knowledge with them is its own reward. Build the in the ability for people to answer questions and teach others."
			},{
			category : "General",
			title : "On-boarding / Tutorials",
			img : "IMAGES_13_ON-BOARDING_PNG",
			desc : "No one uses manuals anymore! Help people get used to your system with a nice tutorial or a gentle introduction on how everything works."
			},{
			category : "General",
			title : "Signposting",
			img : "IMAGES_14_SIGNPOSTING_PNG",
			desc : "Sometimes, even the best people need to be pointed in the right direction. Signpost next actions to help smooth early stages of a journey. Use \"just in time\" cues to help users who are stuck. "
			},{
			category : "General",
			title : "Loss Aversion",
			img : "IMAGES_15_LOSS_AVERSION_PNG",
			desc : "No one likes to lose things. Fear of losing status, friends, points, achievements, possessions, progress etc can be a powerful reason for people to do things."
			},{
			category : "General",
			title : "Progress / Feedback",
			img : "IMAGES_16_PROGRESS_PNG",
			desc : "Progress and feedback come in many forms and have many mechanics available. All User Types need some sort of measure of progress or feedback, but some types work better than others."
			},{
			category : "General",
			title : "Theme",
			img : "IMAGES_17_THEME_PNG",
			desc : "Give your gamification a theme, often linked with narrative. Can be anything from company values to werewolves. Add a little fantasy, just make sure users can make sense of it."
			},{
			category : "General",
			title : "Narrative / Story",
			img : "IMAGES_18_NARRATIVE_PNG",
			desc : "Tell your story and let people tell theirs. Use gamification to strengthen understanding of your story by involving people. Think like a writer!"
			},{
			category : "General",
			title : "Curiosity / Mystery Box",
			img : "IMAGES_55_CURIOSITY_PNG",
			desc : "Curiosity is a strong force. Not everything has to be fully explained, a little mystery may encourage people in new directions."
			},{
			category : "General",
			title : "Time Pressure",
			img : "IMAGES_56_TIME_PRESSURE_PNG",
			desc : "Reducing the amount of time people have to do things can focus them on the problem. It can also lead to different decisions."
			},{
			category : "Free Spirit",
			title : "Exploration",
			img : "IMAGES_31_EXPLORATION_PNG",
			desc : "Give your Free Spirits room to move and explore. If you are creating virtual worlds, consider that they will want to find the boundaries and give them something to find. "
			},{
			category : "Free Spirit",
			title : "Branching Choices",
			img : "IMAGES_32_CHOICES_PNG",
			desc : "Let the user choose their path and destiny.  From multiple learning paths to responsive narratives. Remember,  choice has to be or at least feel meaningful to be most  effective and appreciated."
			},{
			category : "Free Spirit",
			title : "Easter Eggs",
			img : "IMAGES_33_EASTER_EGGS_PNG",
			desc : "Easter eggs are a fun way to reward and surprise people for just having a look around. For some, the harder they are to find, the more exciting it is!"
			},{
			category : "Free Spirit",
			title : "Unlockable / Rare Content",
			img : "IMAGES_34_UNLOCKABLES_PNG",
			desc : "Add to the feeling of self expression and value, by offering unlockable or rare content for free spirits to make use of. Link to Easter eggs and exploration as well as achievement. "
			},{
			category : "Free Spirit",
			title : "Creativity Tools",
			img : "IMAGES_35_CREATIVITY_TOOLS_PNG",
			desc : "Allow people to create their own content and express themselves. This may be for personal gain, for pleasure or to help other people (teaching materials, levels, gear, FAQ etc). "
			},{
			category : "Free Spirit",
			title : "Customisation",
			img : "IMAGES_36_CUSTOMISATION_PNG",
			desc : "Give people the tools to customise their experience. From avatars to the environment, let them express themselves and choose how they will present themselves to others."
			},{
			category : "Disruptor",
			title : "Innovation Platform",
			img : "IMAGES_25_INNOVATION_PNG",
			desc : "Disruptors think outside the box and boundaries of your system. Give them a way to channel that and you can generate great innovations."
			},{
			category : "Disruptor",
			title : "Voting / Voice",
			img : "IMAGES_26_VOTING_PNG",
			desc : "Give people a voice and let them know that it is being heard. Change is much easier if everyone is on the same page."
			},{
			category : "Disruptor",
			title : "Development Tools",
			img : "IMAGES_27_DEVELOPMENT_TOOLS_PNG",
			desc : "Think modifications rather than hacking and breaking. Let them develop new add-ons to improve and build on the system."
			},{
			category : "Disruptor",
			title : "Anonymity",
			img : "IMAGES_28_ANONYMITY_PNG",
			desc : "If you want to encourage total freedom and lack of inhibitions, allow your users to remain anonymous. Be very, very careful as anonymity can bring out the worst in people!"
			},{
			category : "Disruptor",
			title : "Light Touch",
			img : "IMAGES_29_LIGHT_TOUCH_PNG",
			desc : "Whilst you must have rules, if you are encouraging disruption, apply them with a light touch. See how things play out before jumping in. Keep a watchful eye and listen to the feedback of users."
			},{
			category : "Disruptor",
			title : "Anarchy",
			img : "IMAGES_30_ANARCHY_PNG",
			desc : "Sometimes you just have to burn it all to the ground and start again. Sit back, throw the rule book out of the window and see what happens! Consider running short \"no rules\" events."
			},{
			category : "Achiever",
			title : "Challenges",
			img : "IMAGES_37_CHALLENEGES_PNG",
			desc : "Challenges help keep people interested, testing their knowledge and allowing them to apply it. Overcoming challenges will make people feel they have earned their achievement."
			},{
			category : "Achiever",
			title : "Certificates",
			img : "IMAGES_38_CERTIFICATES_PNG",
			desc : "Different from general rewards and trophies, certificates are a physical symbol of mastery and achievement. They carry meaning, status and are useful."
			},{
			category : "Achiever",
			title : "Learning / New Skills",
			img : "IMAGES_39_LEARNING_PNG",
			desc : "What better way to achieve mastery than to learn something new? Give your users the opportunity to learn and expand. "
			},{
			category : "Achiever",
			title : "Quests",
			img : "IMAGES_40_QUESTS_PNG",
			desc : "Quests give users a fixed goal to achieve. Often made up from a series of linked challenges, multiplying the feeling of achievement."
			},{
			category : "Achiever",
			title : "Levels / Progression",
			img : "IMAGES_41_LEVELS_PNG",
			desc : "Levels and goals help to map a users progression through a system. It can be as important to see where you can go next as it is to see where you have been. "
			},{
			category : "Achiever",
			title : "Boss Battles",
			img : "IMAGES_42_BOSS_BATTLES_PNG",
			desc : "Boss battles are a chance to consolidate everything you have learned and mastered in one epic challenge. Usually signals the end of the journey - and the beginning of a new one. "
      }]};

var r=0;
function loadCard(r){
  card.title(cardsObj.cards[r].category);
  card.subtitle(cardsObj.cards[r].title);
  card.banner(cardsObj.cards[r].img);
  card.body(cardsObj.cards[r].desc);

}

function loadRandomCard(){
  r=Math.floor(Math.random() * cardsObj.cards.length) + 1; 
  loadCard(r);
}

Accel.init();

card.on('click', function(e) {
  r++;
  if(e.button=='select'){
    if(r==cardsObj.cards.length-1){
      r=0;
    }
    
    loadCard(r);
  }
});

card.on('accelTap', function(e) {
  loadRandomCard();
});


loadRandomCard();

