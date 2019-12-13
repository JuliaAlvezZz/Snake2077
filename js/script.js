$(document).ready(function(){
	$(document).keydown(function(event){
		h=$("#head");
		setInterval(mexer, 100);
		alert(event.keyCode);
		function mexer(){
			switch(event.keyCode){
				case 37:
					if(h.offset().left>485){
						h.animate({"left": "-=5px"}, "slow");
					}
					break;
				case 38:
					if(h.offset().top>120){
						h.animate({"top": "-=5px"}, "slow");
					}
					break;
				case 39:
					if(h.offset().left<870){
						h.animate({"left": "+=5px"}, "slow");
					}
					break;
				case 40:
					if(h.offset().top<505){
						h.animate({"top": "+=5px"}, "slow");
					}
					break;
			}
		}
	});
});