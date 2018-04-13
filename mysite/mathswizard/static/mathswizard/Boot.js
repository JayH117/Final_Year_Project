// James Hynes 2018
var Game = {};

Game.Boot = function(game){

};

// booting the game
Game.Boot.prototype = {
	init:function(){

		this.input.maxPointers = 1;

		this.stage.disableVisibilityChange = true;
	},

	preload:function(){

		this.load.image('preloaderBar', background);

	},

	create:function(){
		// starting preloader
		this.state.start('Preloader')
	}
};