Game.Level1 = function(game){

};

Game.Level1.prototype = {
	create:function(game){
		console.log(type);
		console.log("game state start");
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
		
		if(type == "Addition"){
			opText = "+";
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
		
		console.log(type);
		if(type == "Addition")
		{
			answer = part1+part2;
		}
		
		if(type == "Subtraction")
		{
			if(part1>part2){
				answer = part1-part2;
			}
			else{
				answer = part2-part1;
			}
			
		}
		
		if(type == "Multiplication")
		{
			answer = part1*part2;
		}
		
		
		numbers.push(part1, part2);

		console.log("part1:",part1,"part2:", part2);
		numbers = this.randomise(numbers);
		titlescreen = game.add.sprite(game.world.centerX, game.world.centerY, 'desk');
		titlescreen.anchor.setTo(0.5, 0.5);
		var posx = game.world.centerX - 192;
		var posy = game.world.centerY + 50;
		var opPosX = game.world.centerX + 350;
		var opPosY = game.world.centerY - 100;
		var firstChoicex = game.world.centerX - 200;
		var choicesY = game.world.centerY - 200;
		var secondChoicex = game.world.centerX;

		for (var i = 0; i < numbers.length; i++)
		{
			if (i < 2){

				if (countNums == 0){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 
						if(selected <2){
							sum.push(numbers[0]);
							console.log(sum);
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
				console.log(numbers[i]);

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

		this.createButton(game, answer, game.world.centerX+300, game.world.centerY-200, 150, 100,
			function(){
				console.log('answer');
			});
		this.createButton(game, "=", game.world.centerX+150, game.world.centerY-200, 75, 50,
			function(){
			});
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

		this.createButton(game, "Remove", game.world.centerX+400, game.world.centerY + 100, 150, 75,
			function(){
				selected = 0;
				firstChoice.kill();
				fct.destroy();
				secondChoice.kill();
				sct.kill();
				this.clear(sum);
			});

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
				if(selected == 2){
					console.log(check);
					console.log(answer);
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
						console.log("LEVELPROG"+levelprog);
						if (type == Sfocus)
						{
							console.log("here")
							cof++;
							levelprog++;
						}
						if (levelprog >= 10)
						{
							levelprog = 0;
							level++;
							console.log(level);
						}
						console.log(completed);
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
	
	popUp:function(num, game, selected){
		if(selected == 0){
			firstChoice = game.add.button(game.world.centerX - 350, game.world.centerY-200, 'button', function(){}, this, 2, 1, 0);
			firstChoice.anchor.setTo(0.5, 0.5);
			firstChoice.width = 150;
			firstChoice.height = 100;
			
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
	
	clear:function(sum){
		while(sum.length > 0) {
			sum.pop();
		}
	}
};