var a;
a=setInterval(function(){mexer(0, 0);}, 500);

$(document).ready(function(){
	$(document).keydown(function(event){
		var dirY=0, dirX=0;
		switch(event.keyCode){
			case 37:
				dirY=0;
				dirX=-1;
				break;
			case 38:
				dirY=-1;
				dirX=0;
				break;
			case 39:
				dirY=0;
				dirX=1;
				break;
			case 40:
				dirY=1;
				dirX=0;
				break;
		}
		clearInterval(a);
		a=setInterval(function(){mexer(dirY, dirX);}, 500);
	});
});

function mexer(dirY, dirX){
	var h=$("#head"), b=$("#body"), t=$("#tail");
	
	if(dirY===0 && dirX===-1 && h.offset().left>495){
		h.animate({"left": "-=5px"}, "slow");
	}else if(dirY===-1 && dirX===0 && h.offset().top>115){
		h.animate({"top": "-=5px"}, "slow");
	}else if(dirY===0 && dirX===1 && h.offset().left<875){
		h.animate({"left": "+=5px"}, "slow");
	}else if(dirY===1 && dirX===0 && h.offset().top<505){
		h.animate({"top": "+=5px"}, "slow");
	}else{
		h.stop();
	}
}