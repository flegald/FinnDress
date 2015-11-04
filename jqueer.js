$(document).ready(function(){
	$('.clothes').draggable();
});

$(document).ready(function(){
	$('#back1').click(function(){
		$('#finn').css('background-image', 'url(img/hell.jpg)');
	});
});

$(document).ready(function(){
	$('#back2').click(function(){
		$('#finn').css('background-image', 'url(img/oo.png)');
	});
});	

$(document).ready(function(){
	$('#back3').click(function(){
		$('#finn').css('background-image', 'url(img/beach.jpg)');
	});
});	

$(document).ready(function(){
	$('#back4').click(function(){
		$('#finn').css('background-image', 'url(img/water.jpg)');
	});
});	

$(document).ready(function(){
	$('#back5').click(function(){
		$('#finn').css('background-image', 'url(img/mario.png)');
	});
});	

$(document).ready(function(){
	$('#rain').click(function(){
		$('#corn').removeClass('hidden');
		$('#corn').animate({right: '-200px'});
	});
});

$(document).keydown(function(e){
	switch(e.which) {
		case 37: $('#corn').animate({left: '-=10px'})
		break;

		case 38: $('#corn').animate({top: '-=10px'})
		break;

		case 39: $('#corn').animate({right: '-=10px'})
		break;

		case 40:$('#corn').animate({bottom: '-=10px'})
		break;

		default: return;
	};

		e.preventDefault();
});