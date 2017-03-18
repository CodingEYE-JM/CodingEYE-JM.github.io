function showNumberWithAnimation(i, j, randNumber){
	var numberCell = $('#number-cell-' + i + '-' + j);
	
	numberCell.css('background-color', getNumberBackgroundColor(randNumber) );
	numberCell.css('color', getNumberColor(randNumber) );
	numberCell.text(randNumber);
	
	numberCell.animate({
		width:cellSideLength,
		height:cellSideLength,
		top:getPosTop(i, j),
		left:getPosLeft(i, j)
	},50);
}

function showMoveAnimation(from_x, from_y, to_x, to_y){
	
	var numberCell = $('#number-cell-' + from_x + '-' + from_y);
	
	numberCell.animate({
		top:getPosTop(to_x, to_y),
		left:getPosLeft(to_x, to_y)
	},200);
}

function updateScore(score){
	$('#score').text(score);
}