Game.Preloader = function(game){

	this.preloadBar = null;
};

Game.Preloader.prototype = {
	preload:function(){
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,'preloaderBar');

		this.preloadBar.anchor.setTo(0.5, 0.5);

		this.time.advancedTiming = true;

		this.load.setPreloadSprite(this.preloadBar);

		// Load assets
		this.load.image('titlescreen', 'assets/village.jpeg');

		this.load.image('button', 'assets/buttons/scroll.png');
	},

	create:function(){

		this.state.start('MainMenu');
	}
};