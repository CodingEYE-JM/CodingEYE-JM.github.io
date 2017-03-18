var board = new Array();
var score = 0;

//Mobile
var start_x = 0;
var start_y = 0;
var end_x = 0;
var end_y = 0;

$(document).ready(function(){
	prepareForMobile();
	newgame();
});

function prepareForMobile(){
	
	if(documentWidth > 500){
		gridContainerWidth = 500;
		cellSpace = 20;
		cellSideLength = 100;
	}
	
	$('#grid-container').css('width',gridContainerWidth - 2 * cellSpace);
	$('#grid-container').css('height',gridContainerWidth - 2 * cellSpace);
	$('#grid-container').css('border-radius',0.02 * gridContainerWidth);
	$('#grid-container').css('padding',cellSpace);
	
	$('.grid-cell').css('width',cellSideLength);
	$('.grid-cell').css('height',cellSideLength);
	$('.grid-cell').css('border-radius',0.02 * cellSideLength);
}

function newgame(){
	//初始化棋盘格
	init();
	//在随机的两个格子生成数字
	generateOneNumber();
	generateOneNumber();
}

function init(){
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			var gridCell = $("#grid-cell-" + i + "-" + j);
			gridCell.css('top', getPosTop(i,j));
			gridCell.css('left', getPosLeft(i,j));
		}
	}
	
	for(var i = 0;i < 4;i++){
		board[i] = new Array();
		for(var j = 0;j < 4;j++){
			board[i][j] = 0;
		}
	}
	
	updateBoardView();
	
	score = 0;
}


function updateBoardView(){
	$(".number-cell").remove();
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			$("#grid-container").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '" ></div>');
			var theNumberCell = $("#number-cell-" + i + "-" + j);
			
			if(board[i][j] == 0){
				theNumberCell.css("width","0px");
				theNumberCell.css("height","0px");
				theNumberCell.css('top', getPosTop(i,j) + cellSideLength/2);
				theNumberCell.css('left', getPosLeft(i,j) + cellSideLength/2);
			}else{
				theNumberCell.css("width",cellSideLength);
				theNumberCell.css("height",cellSideLength);
				theNumberCell.css('top', getPosTop(i,j));
				theNumberCell.css('left', getPosLeft(i,j));
				theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
				theNumberCell.css('color', getNumberColor(board[i][j]));
				theNumberCell.text(board[i][j]);				
			}
		}
	}
	
	$('.number-cell').css('line-height',cellSideLength +'px');
	$('.number-cell').css('font-size',0.6 * cellSideLength +'px');
}

function generateOneNumber(){
	
	if(nospace(board))
		return false;
	
	//随机一个位置
	var randx = parseInt( Math.floor( Math.random() * 4 ) );
	var randy = parseInt( Math.floor( Math.random() * 4 ) );
	
	while(true){
		if(board[randx][randy] == 0)
			break;
		
		randx = parseInt( Math.floor( Math.random() * 4 ) );
		randy = parseInt( Math.floor( Math.random() * 4 ) );
	}
	//随机一个数字
	var randNumber = Math.random() < 0.5? 2 : 4;
	//在随机位置显示随机数字
	board[randx][randy] = randNumber;
	
	showNumberWithAnimation(randx, randy, randNumber);
	
	return true;
}

$(document).keydown(function(event){
	
	event.preventDefault();
	switch(event.keyCode){
		case 37:
			if( moveLeft() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}
			break;
		case 38:
			if( moveUp() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}
			break;
		case 39:
			if( moveRight() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}
			break;
		case 40:
			if( moveDown() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}
			break;
	}
});

document.addEventListener('touchstart',function(event){
	start_x = event.touches[0].pageX;
	start_y = event.touches[0].pageY;
});

document.addEventListener('touchmove',function(event){
	event.preventDefault();
});

document.addEventListener('touchend',function(event){
	end_x = event.changedTouches[0].pageX;
	end_y = event.changedTouches[0].pageY;
	
	var delta_x = end_x - start_x;
	var delta_y = end_y - start_y;
	
	if(Math.abs(delta_x) < 0.3 * documentWidth && Math.abs(delta_y) < 0.3 * documentWidth)
		return;
	
	if(Math.abs(delta_x) >= Math.abs(delta_y)){
		
		if(delta_x >= 0){
			if( moveRight() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}
		}
		else{
			if( moveLeft() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}
			
		}
		
	}
	else{
		
		if(delta_y >= 0){
			if( moveDown() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}
		}
		else{
			if( moveUp() ){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",240);
			}			
		}
		
	}
});


function nospace(board){
	
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			if(board[i][j] == 0)
				return false;
		}
	}
	return true;
}

function isgameover(){
	
	if(nospace(board) && nomove(board)){
		gameover();
	}
}

function gameover(){
	alert('Game Over');
}

