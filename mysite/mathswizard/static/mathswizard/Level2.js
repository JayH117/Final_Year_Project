Game.Level1 = function(game){

};

var titlescreen; 
var answer;
var numNo = 6;
var operatorChosen = false;
var numberChosen = 0;
var operator;
var sum = [];
var check = 0;
var countNums = 0;
var countOpps;

var operatorArr = ["-", "+", "x"];
var numbers = [];

for (var i = 0; i < (numNo-2); i++)
{
    numbers[i] = Math.floor((Math.random() * 20) + 1);
    console.log("Array:", numbers[i]);
}

var test1 = Math.floor((Math.random() * 20) + 1);
var test2 = Math.floor((Math.random() * 20) + 1);
answer = test1+test2;

numbers.push(test1, test2);

console.log("Test1:",test1,"Test2:", test2);

Game.Level1.prototype = {

	create:function(game){
		numbers = this.randomise(numbers);
		titlescreen = game.add.sprite(game.world.centerX, game.world.centerY, 'titlescreen');
		titlescreen.anchor.setTo(0.5, 0.5);
		var posx = game.world.centerX - 192;
		var posy = game.world.centerY - 192;
		var opPosX = game.world.centerX + 350;
		var opPosY = game.world.centerY - 100;

		for (var i = 0; i < numbers.length; i++)
		{
			if (i < 2){

				if (countNums == 0){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 

						sum.push(numbers[0]);
						console.log(sum);
						numberChosen++;
						
					});
				}

				if (countNums == 1){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 

						sum.push(numbers[1]);
						console.log(sum);
						numberChosen++;
						
					});
				}

				posx = posx + 200;
				console.log(numbers[i]);

			}
			if (i == 2){

				if (countNums == 2){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 

						sum.push(numbers[2]);
						console.log(sum);
						numberChosen++;
						
					});
				}
				posx = posx + 200;
				posx = game.world.centerX - 192;
				posy = posy + 200;

			}

			if(i > 2){
				if (countNums == 3){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 

						sum.push(numbers[3]);
						console.log(sum);
						numberChosen++;
						
					});
				}

				if (countNums == 4){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 

						sum.push(numbers[4]);
						console.log(sum);
						numberChosen++;
						
					});
				}

				if (countNums == 5){
					this.createButton(game, numbers[i], posx, posy, 150, 100,
					function(){ 

						sum.push(numbers[5]);
						console.log(sum);
						numberChosen++;
						
					});
				}
				posx = posx + 200;
			}
			countNums++;

		};

		this.createButton(game, answer, game.world.centerX, game.world.centerY + 200, 150, 100,
			function(){
				console.log('answer');
				console.log(scroll);
			});

		this.createButton(game, "Remove", game.world.centerX, game.world.centerY + 100, 150, 75,
			function(){
				sum.pop();
				console.log(sum);
				console.log('Remove');
			});

		this.createButton(game, "Check", game.world.centerX, game.world.centerY + 300, 150, 75,
			function(){
				for(var x = 0; x < sum.length; x++)
				{
					check += sum[x];
				}

				if (check == answer){
					console.log('yup');
					this.game.state.start('Level1');
				}

				console.log(check);
				console.log('Check');
			});

		for (var j = 0; j < operatorArr.length; j++){

			if (countOpps = 0){
				this.createButton(game, operatorArr[j], opPosX, opPosY, 75, 75,
				function(){
					operatorChosen = true;
					operator = 0;
					console.log(operatorChosen);
				});
			}

			if (countOpps = 1){
				this.createButton(game, operatorArr[j], opPosX, opPosY, 75, 75,
				function(){
					operatorChosen = true;
					operator = 1;
					console.log(operatorChosen);
				});
			}

			if (countOpps = 2){
				this.createButton(game, operatorArr[j], opPosX, opPosY, 75, 75,
				function(){
					operatorChosen = true;
					operator = 2;
					console.log(operatorChosen);
				});
			}
			
			opPosY = opPosY + 90;
			countOpps++;
		}

	},

	update:function(){
		
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
};