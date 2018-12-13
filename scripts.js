sliderAtual = 1;
sliderMax = 3;
tempoSlider = 3000;

function troca() {
	document.getElementById('b1').style.visibility = "hidden";
	document.getElementById('b2').style.visibility = "hidden";
	document.getElementById('b3').style.visibility = "hidden";

	document.getElementById('b' + sliderAtual).style.visibility = "visible";

	sliderAtual = sliderAtual+1;

	if (sliderAtual > sliderMax) {
		sliderAtual = 1;
	}
}

function slider(){
	document.getElementById('b1').style.visibility = "visible";
	document.getElementById('b2').style.visibility = "hidden";
	document.getElementById('b3').style.visibility = "hidden";

	sliderTimer = setInterval(troca,tempoSlider);
}

