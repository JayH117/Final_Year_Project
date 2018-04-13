// James Hynes 2018
Game.Level1 = function(game){

};

Game.Level1.prototype = {
	create:function(game){
		
		// declaring variables
		var numNo = 6;
		var numberChosen = 0;
		var sum = [];
		var check = 0;
		var countNums = 0;
		var selected = 0;
		var fct = 0;
		var sct = 0;
		var OT;
		var ET;
		var optext;
		var operator;
		var equals;
		var firstChoice;
		var secondChoice;
		var numbers = [];
		
		// checking sum chosen
		if(type == "Addition"){
			// sets operator
			opText = "+";
			
			//checking difficulty and generating choices and answer factors accordingly
			if (difficulty == "Beginner"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 20) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 20) + 1);
				part2 = Math.floor((Math.random() * 20) + 1);
			}
			
			if (difficulty == "Intermediate"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 50) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 50) + 1);
				part2 = Math.floor((Math.random() * 50) + 1);
			}
			
			if (difficulty == "Advanced"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 100) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 100) + 1);
				part2 = Math.floor((Math.random() * 100) + 1);
			}
		}
		
		// same code as above for subtraction
		if(type == "Subtraction"){
			opText = "-";
			if (difficulty == "Beginner"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 20) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 20) + 1);
				part2 = Math.floor((Math.random() * 20) + 1);
			}
			
			if (difficulty == "Intermediate"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 50) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 50) + 1);
				part2 = Math.floor((Math.random() * 50) + 1);
			}
			
			if (difficulty == "Advanced"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 100) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 100) + 1);
				part2 = Math.floor((Math.random() * 100) + 1);
			}
		}
		
		// same code as above for multiplication
		if(type == "Multiplication"){
			opText = "x";
			if (difficulty == "Beginner"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 5) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 5) + 1);
				part2 = Math.floor((Math.random() * 5) + 1);
			}
			
			if (difficulty == "Intermediate"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 8) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 8) + 1);
				part2 = Math.floor((Math.random() * 8) + 1);
			}
			
			if (difficulty == "Advanced"){
				for (var i = 0; i < (numNo-2); i++)
				{		
					numbers[i] = Math.floor((Math.random() * 12) + 1);
					console.log("Array:", numbers[i]);
				}
				part1 = Math.floor((Math.random() * 12) + 1);
				part2 = Math.floor((Math.random() * 12) + 1);
			}
		}
		
		// generating answer for addition
		if(type == "Addition")
		{
			answer = part1+part2;
		}
		
		// generating answer for subtraction
		if(type == "Subtraction")
		{
			// checking to make sure no negative numbers are chosen
			if(part1>part2){
				answer = part1-part2;
			}
			else{
				answer = part2-part1;
			}
			
		}
		
		// generating answer for multiplication
		if(type == "Multiplication")
		{
			answer = part1*part2;
		}
		
		
		numbers.push(part1, part2);
		
		//randomising the numbers array so no pattern emerges
		numbers = this.randomise(numbers);
		
		// adding game screen to the state
		titlescreen = game.add.sprite(game.world.centerX, game.world.centerY, 'desk');
		titlescreen.anchor.setTo(0.5, 0.5);
		
		// declaring position variables 
		var posx = game.world.centerX - 192;
		var posy = game.world.centerY + 50;
		var opPosX = game.world.centerX + 350;
		var opPosY = game.world.centerY - 100;
		var firstChoicex = game.world.centerX - 200;
		var choicesY = game.world.centerY - 200;
		var secondChoicex = game.world.centerX;

		// starting button creation loop
		for (var i = 0; i < numbers.length; i++)
		{	
			// for the first three buttons
			if (i < 2){
				if (countNums == 0){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 
						// if both numbers are not selected
						if(selected < 2){
							// adding this button value to the sum array
							sum.push(numbers[0]);
							
							// determine if the button is first or second choice and position
							if (selected == 0){
								firstChoice = this.popUp(numbers[0], game, selected);
								fct = this.popText(numbers[0], game, selected);
							}
							if (selected == 1){
								secondChoice = this.popUp(numbers[0], game, selected);
								sct = this.popText(numbers[0], game, selected);
							}
							selected++;
						}
					});
				}

				if (countNums == 1){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 
						if(selected < 2){
							sum.push(numbers[1]);
							console.log(sum);
							numberChosen++;
							if (selected == 0){
								firstChoice = this.popUp(numbers[1], game, selected);
								fct = this.popText(numbers[1], game, selected);
							}
							if (selected == 1){
								secondChoice = this.popUp(numbers[1], game, selected);
								sct = this.popText(numbers[1], game, selected);
							}
							selected++;
						}
					});
				}
				posx = posx + 200;

			}
			if (i == 2){

				if (countNums == 2){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 
						if(selected < 2){
							sum.push(numbers[2]);
							console.log(sum);
							if (selected == 0){
								firstChoice = this.popUp(numbers[2], game, selected);
								fct = this.popText(numbers[2], game, selected);
							}
							if (selected == 1){
								secondChoice = this.popUp(numbers[2], game, selected);
								sct = this.popText(numbers[2], game, selected);
							}
							selected++;
						}
					});
				}
				posx = posx + 200;
				posx = game.world.centerX - 192;
				posy = posy + 150;

			}

			if(i > 2){
				if (countNums == 3){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 
						if (selected < 2){
							sum.push(numbers[3]);
							console.log(sum);
							if (selected == 0){
								firstChoice = this.popUp(numbers[3], game, selected);
								fct = this.popText(numbers[3], game, selected);
							}
							if (selected == 1){
								secondChoice = this.popUp(numbers[3], game, selected);
								sct = this.popText(numbers[3], game, selected);
							}
							selected++;
						}
					});
				}

				if (countNums == 4){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 
						if (selected < 2){
							sum.push(numbers[4]);
							console.log(sum);
							if (selected == 0){
								firstChoice = this.popUp(numbers[4], game, selected);
								fct = this.popText(numbers[4], game, selected);
							}
							if (selected == 1){
								secondChoice = this.popUp(numbers[4], game, selected);
								sct = this.popText(numbers[4], game, selected);
							}
							selected++;	
						}
					});
				}

				if (countNums == 5){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 
						if(selected < 2){
							sum.push(numbers[5]);
							console.log(sum);
							if (selected == 0){
								firstChoice = this.popUp(numbers[5], game, selected);
								fct = this.popText(numbers[5], game, selected);
							}
							if (selected == 1){
								secondChoice = this.popUp(numbers[5], game, selected);
								sct = this.popText(numbers[5], game, selected);
							}
							selected++;	
						}
						
					});
				}
				posx = posx + 200;
			}
			countNums++;
		};
		
		// displaying the answer
		this.createButton(game, answer, game.world.centerX+300, game.world.centerY-200, 150, 100,
			function(){
			});
		
		// displaying the operator
		this.createButton(game, "=", game.world.centerX+150, game.world.centerY-200, 75, 50,
			function(){
			});
		
		// quit button, saves all game data and posts the form the data is saved to
		this.createButton(game, "Quit", game.world.centerX+450, game.world.centerY-250, 50, 40,
			function(){
				console.log('Quit');
				console.log(likes);
				console.log(dislikes);
				document.getElementById('id_likes').value = likes;
				document.getElementById('id_dislikes').value = dislikes;
				document.getElementById('id_level').value = level;
				document.getElementById('id_cof').value = cof;
				document.getElementById('id_completed').value = completed;
				document.getElementById('id_skipped').value = skipped;
				document.getElementById('id_levelprog').value = levelprog;
				document.getElementById("gameForm").submit();
			});
		
		// skip button starts the skip state
		this.createButton(game, "Skip", game.world.centerX-400, game.world.centerY+200, 150, 100,
			function(){
				console.log('Skip');
				skipped++;
				if(type == "Addition"){
					additionCounter--;
				}
				if(type == "Multiplication"){
					multiplicationCounter--;
				}
				if(type == "Subtraction"){
					subtractionCounter--;
				}
				game.state.start('skipHandler');
			});
		
		// remove button to remove selection 
		this.createButton(game, "Remove", game.world.centerX+400, game.world.centerY + 100, 150, 75,
			function(){
				selected = 0;
				firstChoice.kill();
				fct.destroy();
				secondChoice.kill();
				sct.kill();
				this.clear(sum);
			});

		// check button checks the answer, clears if incorrect, increments appropriate values otherwise 
		// and starts postLevel state
		this.createButton(game, "Check", game.world.centerX+400, game.world.centerY + 200, 125, 75,
			function(){
				
				if (type == "Multiplication"){
					check = sum[0] * sum[1];
				}
				
				if (type == "Addition"){
					check = sum[0] + sum[1];
				}
				
				if (type == "Subtraction"){
					check = sum[0] - sum[1];
				}
				
				// make sure selected = 2
				if(selected == 2){
					
					// increment counters if answer is right
					if (check == answer){
						if(type == "Addition"){
							additionCounter++;
						}
						if(type == "Multiplication"){
							multiplicationCounter++;
						}
						if(type == "Subtraction"){
							subtractionCounter++;
						}
						completed++;
						levelprog++;
						
						// add extra point if the sum focussed on was completed
						if (type == Sfocus)
						{
							cof++;
							levelprog++;
						}
						// increment level if level over 10 and set levelProg to zero
						if (levelprog >= 10)
						{
							levelprog = 0;
							level++;
						}
						// start postlevel
						this.state.start('postLevel');
					}
					else{
						this.clear(sum);
						selected = 0;
						firstChoice.kill();
						fct.destroy();
						secondChoice.kill();
						sct.kill();
					}
				}
				// if 2 values not selected, clear
				else{
					this.clear(sum);
					selected = 0;
					firstChoice.kill();
					fct.destroy();
					secondChoice.kill();
					sct.kill();
				}

				console.log(check);
			});

	},

	update:function(){
		
	},
	
	// function to create button to display sum
	popUp:function(num, game, selected){
		if(selected == 0){
			firstChoice = game.add.button(game.world.centerX - 350, game.world.centerY-200, 'button', function(){}, this, 2, 1, 0);
			firstChoice.anchor.setTo(0.5, 0.5);
			firstChoice.width = 150;
			firstChoice.height = 100;
			
			// add the operator to the sum
			operator = game.add.button(game.world.centerX - 175, game.world.centerY-200, 'button', function(){}, this, 2, 1, 0);
			operator.anchor.setTo(0.5, 0.5);
			operator.width = 75;
			operator.height = 50;
			
			return firstChoice;
		}
		
		if(selected == 1){
			secondChoice = game.add.button(game.world.centerX, game.world.centerY-200, 'button', function(){}, this, 2, 1, 0);
			secondChoice.anchor.setTo(0.5, 0.5);
			secondChoice.width = 150;
			secondChoice.height = 100;
			return secondChoice;
		}
	},

	// create button function as seen before
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
	
	// randomise function to mix up the numbers array to prevent a pattern
	randomise:function(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	},
	
	// function that works with popUp to place text on display sum buttons
	popText:function(num, game, selected){
		if(selected == 0){
			fct = game.add.text(game.world.centerX - 350, game.world.centerY - 200, num, {
			font: "14px Arial",
			fill: "#fff",
			align: "center"
			});
			fct.anchor.setTo(0.5, 0.5);
	
			OT = game.add.text(game.world.centerX - 175, game.world.centerY - 200, opText, {
			font: "14px Arial",
			fill: "#fff",
			align: "center"
			});
			OT.anchor.setTo(0.5, 0.5);
			console.log(selected);
			return fct;
		}
		if(selected == 1){
			sct = game.add.text(game.world.centerX, game.world.centerY - 200, num, {
			font: "14px Arial",
			fill: "#fff",
			align: "center"
			});
			sct.anchor.setTo(0.5, 0.5);
			return sct;
		}
	},
	
	// clear function that clears selected array
	clear:function(sum){
		while(sum.length > 0) {
			sum.pop();
		}
	}
};