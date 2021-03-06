// James Hynes 2018
Game.postLevel = function(game){

};

var titlescreen;
console.log("name is " + name);

Game.postLevel.prototype = {
	create:function(game){
		
		// determining the liked and disliked operator
		if((additionCounter > multiplicationCounter) && (additionCounter > subtractionCounter)){
			likes = "Addition";
		}
		else if((subtractionCounter > additionCounter ) && (subtractionCounter > multiplicationCounter)){
			likes = "Subtraction";
		}
		else if((multiplicationCounter > additionCounter) && (multiplicationCounter > subtractionCounter)){
			likes = "Multiplication";
		} else{
			likes = "N/A";
		}
		
		if((additionCounter < multiplicationCounter) && (additionCounter < subtractionCounter)){
			dislikes = "Addition";
		}else if((subtractionCounter < additionCounter ) && (subtractionCounter < multiplicationCounter)){
			dislikes = "Subtraction";
		}else if((multiplicationCounter < additionCounter) && (multiplicationCounter < subtractionCounter)){
			dislikes = "Multiplication";
		} else{
			dislikes = "N/A";
		}
		
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
		
		// next button for updating text
		this.createButton(game, "Next", game.world.centerX+425, game.world.centerY + 200, 75, 75,
			function(){
				textbox++;
				this.updateText(textbox, game);
			});
			
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		
		// determining if the level has changed and updating text appropriately
		if (levelprog == 0 )
		{
			text = game.add.text(0, 0, "Well done! That should keep that pesky dragon at bay!", style);
			text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
			text.setTextBounds(50, 100, 800, 800);
		}
		else{
			text = game.add.text(0, 0, "Awesome! A few more and that dragon will be done for!", style);
			text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
			text.setTextBounds(50, 100, 800, 800);
		}
	
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
	
	// updating text for sum creation and button creation
	updateText:function(textbox, game){
		
		if (textbox == 1){
			text.setText("Which which spell would you like to make next?");
			this.createButton(game, "Addition", game.world.centerX-300, game.world.centerY - 200, 100, 75,
			function(){
				type = "Addition";
				this.game.state.start("Level1");
			});
				
			this.createButton(game, "Multiplication", game.world.centerX, game.world.centerY - 200, 100, 75,
			function(){
				type = "Multiplication";
				this.game.state.start("Level1");
			});
			
			this.createButton(game, "Subtraction", game.world.centerX+300, game.world.centerY -200, 100, 75,
			function(){
				type = "Subtraction";
				this.game.state.start("Level1");
			});
			
			return textbox;
		}	
	}
};