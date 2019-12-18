var a, vel=100;
a=setInterval(function(){mexer("cima");}, vel);

$(document).ready(function(){
	setInterval(comida(), 1000);
	$(document).keydown(function(event){
		var direcao;
		switch(event.keyCode){
			case 37:
				direcao="esquerda";
				break;
			case 38:
				direcao="cima";
				break;
			case 39:
				direcao="direita";
				break;
			case 40:
				direcao="baixo";
				break;
		}
		clearInterval(a);
		a=setInterval(function(){mexer(direcao);}, vel);
	});
});

function mexer(direcao){
	var h=$("#head"), b=$("#body"), t=$("#tail"), hL=h.offset().left, hT=h.offset().top, bL=[], bT=[];
	bL.push(b.offset().left);
	bT.push(b.offset().top);

	if(h.offset().left<=480 || h.offset().top<=120 || h.offset().left>=870 ||h.offset().top>=510){
		console.log("perdeu playboy");
	}

	if(direcao==="esquerda" && h.offset().left>480){
		h.offset(function(index, c){
			p=new Object();
			p.left=c.left - 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else if(direcao==="cima" && h.offset().top>130){
		h.offset(function(index, c){
			p=new Object();
			p.top=c.top - 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else if(direcao==="direita" && h.offset().left<870){
		h.offset(function(index, c){
			p=new Object();
			p.left=c.left + 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else if(direcao==="baixo" && h.offset().top<515){
		h.offset(function(index, c){
			p=new Object();
			p.top=c.top + 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else{
		h.stop();
	}
}

function comida(){
	var comida=$("#comida");

	comida.offset({left: $("#jogo").offset().left, top: (Math.random() * 390) + 120});
	console.log(comida.offset());
}