// James Hynes 2018
Game.howto = function(game){

};

var titlescreen;

Game.howto.prototype = {
	create:function(game){
		// declaring variables
		var textbox = 0;
		titlescreen = game.add.sprite(game.world.centerX, game.world.centerY, 'gamescreen');
		titlescreen.anchor.setTo(0.5, 0.5);
		titlescreen.width = game.width;
		titlescreen.height = game.height;
		var graphics = game.add.graphics(100, 100);
		var bar = game.add.graphics();
		bar.beginFill(0x000000, 0.6);
		bar.drawRect(0, 450, 1000, 100);
		
		// next button for updating text
		this.createButton(game, "Next", game.world.centerX+425, game.world.centerY + 200, 75, 75,
			function(){
				textbox++;
				this.updateText(textbox, game);
				if(textbox == 1){
					// adding the dragon speech bubble to the game
					dragonBubble = game.add.sprite(game.world.centerX+100, game.world.centerY-150, 'dragonBubble');
					dragonBubble.width = 200;
					dragonBubble.height = 200;
				}
				if(textbox > 3){
					// removing the bubble
					dragonBubble.destroy();
				}
				if(textbox > 6){
					this.game.state.start("MainMenu");
				}
			});
			
		// quit button
		this.createButton(game, "Quit", game.world.centerX+450, game.world.centerY-250, 50, 40,
			function(){
				document.getElementById('id_likes').value = likes;
				document.getElementById('id_dislikes').value = dislikes;
				document.getElementById('id_level').value = level;
				document.getElementById('id_cof').value = cof;
				document.getElementById('id_completed').value = completed;
				document.getElementById('id_skipped').value = skipped;
				document.getElementById('id_levelprog').value = levelprog;
				document.getElementById("gameForm").submit();
			});
		
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		
		// adding text to the game
		text = game.add.text(0, 0, "Hi " + name + ", welcome to the palace!", style);
		text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		text.setTextBounds(50, 100, 800, 800);
		
		window.graphics = graphics;
		},

	update:function(game){
	},

	// create button
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
	},
	
	// update text 
	updateText:function(textbox, game, textButton){
		if (textbox == 1){
			text.setText("I am the court wizard, and we have a problem!");
		}
		
		if (textbox == 2){
			text.setText("Dragons are attacking us in waves,\nour army is fighting them, but they need your help!");
		}
		
		if (textbox == 3){
			text.setText("We need to create new spells by combining\nold ones on these scrolls!");
		}
		
		if (textbox == 4){
			text.setText("We use maths to create spells, there are 3 types,\naddition, subtraction and multiplication!");
		}
		
		if (textbox == 5){
			text.setText("Different dragons are vulnerable to different spells,\nand for each spell you make, the dragon becomes weaker!");
		}
		
		if (textbox == 6){
			text.setText("So help us beat the dragons and save the kingdom!");	
		}
		return textbox;
	}
};