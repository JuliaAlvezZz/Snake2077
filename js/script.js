var a, vel, n, pontos=0;

function comecar(){
	vel=100;
	n=1;
	a=setInterval(function(){mexer("cima");}, vel);
}

$(document).ready(function(){
	comecar();
	comer();
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
		if(n>=5 && n<10){
			vel=500;
		}else if(n>=10 && n<15){
			vel=100;
		}else if(n>=15){
			vel=50;
		}

		a=setInterval(function(){mexer(direcao);}, vel);
	});
});

function mexer(direcao){
	var h=$("#head"), b=$("#b1"), t=$("#tail"), hL=h.offset().left, hT=h.offset().top, bL=[], bT=[], comida=$("#comida");

	for(var i=1; i<=n; i++){
		bL.push($("#b"+i).offset().left);
		bT.push($("#b"+i).offset().top);
	}

	bater(h, bL, bT, t);
	
	if(h.offset().left<=475 || h.offset().top<=115 || h.offset().left>=880 ||h.offset().top>=515 || (h.offset().top===b.offset().top && h.offset().left===b.offset().left)){
		location.reload();
	}

	if(direcao==="esquerda" && h.offset().left>475){
		h.offset(function(index, c){
			p=new Object();
			p.left=c.left - 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		if(n>1){
			for(var i=2; i<=n; i++){
				$("#b"+i).offset({left: bL[i-2], top: bT[i-2]});
			}
		}
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else if(direcao==="cima" && h.offset().top>115){
		h.offset(function(index, c){
			p=new Object();
			p.top=c.top - 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		if(n>1){
			for(var i=2; i<=n; i++){
				$("#b"+i).offset({left: bL[i-2], top: bT[i-2]});
			}
		}
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else if(direcao==="direita" && h.offset().left<880){
		h.offset(function(index, c){
			p=new Object();
			p.left=c.left + 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		if(n>1){
			for(var i=2; i<=n; i++){
				$("#b"+i).offset({left: bL[i-2], top: bT[i-2]});
			}
		}
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else if(direcao==="baixo" && h.offset().top<515){
		h.offset(function(index, c){
			p=new Object();
			p.top=c.top + 10;
			return p;
		});
		b.offset({left: hL, top: hT});
		if(n>1){
			for(var i=2; i<=n; i++){
				$("#b"+i).offset({left: bL[i-2], top: bT[i-2]});
			}
		}
		t.offset({left: bL[bL.length -1], top: bT[bT.length -1]});
	}else{
		h.stop();
	}

	if(h.offset().left>comida.offset().left-5 && h.offset().left<comida.offset().left+5 && h.offset().top>comida.offset().top-5 && h.offset().top<comida.offset().top+5){
		comer();
		n++;
		b.append("<div id='b"+n+"' class='body'>");
		pontuar();
	}
}

function comer(){
	var comida=$("#comida");

	comida.offset({left: (Math.random() * 400 + $("#jogo").offset().left), top: (Math.random() * 400 + $("#jogo").offset().top)});

}

function bater(h, bL, bT, t){
	for(var i=0; i<n; i++){
		if(h.offset().left===bL[i] && h.offset().top===bT[i]){
			location.reload();
		}
	}

	if(h.offset().left===t.offset().left && h.offset().top===t.offset().top){
		location.reload();
	}
}

function pontuar(){
	pontos++;
	$("#pontos").html(pontos);
}