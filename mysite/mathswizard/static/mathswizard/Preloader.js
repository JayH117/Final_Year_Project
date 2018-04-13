// James Hynes 2018
Game.Preloader = function(game){
	this.preloadBar = null;
};

Game.Preloader.prototype = {
	preload:function(){
		// preloader bar loading
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,'preloaderBar');

		this.preloadBar.anchor.setTo(0.5, 0.5);

		this.time.advancedTiming = true;

		this.load.setPreloadSprite(this.preloadBar);

		// Load assets

		this.load.image('titlescreen', background);
		
		this.load.image('desk', desk);

		this.load.image('button', buttons);
		
		this.load.image('gamescreen', wizardlab);
		
		this.load.image('dragonBubble', dragonBubble)
	},

	create:function(){
		// starting main menu
		this.state.start('MainMenu');
	}
};