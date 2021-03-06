// James Hynes 2018
Game.MainMenu = function(game){
};

var titlescreen;

Game.MainMenu.prototype = {
	create:function(game){
		// loading and placing background
		titlescreen = game.add.sprite(game.world.centerX, game.world.centerY, 'titlescreen');
		titlescreen.height = game.height;
		titlescreen.width = game.width;
		titlescreen.anchor.setTo(0.5, 0.5);
		
		// play button
		this.createButton(game, "Play", game.world.centerX, game.world.centerY + 32, 300, 100,
			function(){
				this.state.start('preLevel');
			});
		// how to play button
		this.createButton(game, "How To Play", game.world.centerX, game.world.centerY + 192, 300, 100,
			function(){
				this.state.start('howto');
			});
	},

	update:function(game){

	},

	// create button function to create button and place text
	createButton:function (game, string, x, y, w, h, callback) {
		var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);

		button1.anchor.setTo(0.5, 0.5);
		button1.width = w;
		button1.height = h;

		var txt = game.add.text(button1.x, button1.y, string, {
			font: "14px Arial",
			fill: "#fff",
			align: "center"
		});
		txt.anchor.setTo(0.5, 0.5);
	}
};