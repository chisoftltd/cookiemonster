var portions;
var myPoint = 0;
var isRated = false;
var pageNr;

$('#votes').text(getLocalStorage("key2"));
$('#average').text(getLocalStorage("key3"));

function changePortion(pageNr) {
	portions = document.getElementById("quantity").value;
	setLocalStorage("key1", portions);
	displayPortion(pageNr);
}

function displayPortion(pageNr) {
	console.log("page number = " + pageNr);
	portions = getLocalStorage("key1");
	displaySlider();
	var text = "person";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("selectedPortion").innerHTML = "for " + portions + " " + text;

	if (pageNr == 1) {
		eggYolk();
		milk();
		sugar();
		cream();
		vanilla();
	} else if (pageNr == 2) {
		eggScones();
		flourScones();
		bpScones();
		saltScones();
		butterScones();
		milkScones();
	} else if (pageNr == 3) {
		yeastCronut();
		waterCronut();
		saltCronut();
		sugarCronut();
		milkCronut();
		butterCronut();
		vanillaCronut();
		eggCronut();
		nutmeg();
		flourCronut();
		euButter();
	} else if (pageNr == 4) {
		eggWhite();
		kakao();
		stroSocker();
		hasselNotter();
		mandelSpan();
		eggyolkVl();
		graddeVl();
		sockerVl();
		smorVl();
	} else if (pageNr == 5) {
		console.log("tigerkaka");
		butterTk();
		sockerTk();
		eggTk();
		flourTk();
		bpTk();
		saltTk();
		 milkTk();
		 kakaoTk();
	}
}

window.onload = displayPortion;

function displaySlider() {
	$("#quantity").val(portions);
}

// scones

function eggScones() {
	var text = "egg";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("egg_scones").innerHTML = portions + " " + text;
}

function flourScones() {
	document.getElementById("flour_scones").innerHTML = 500 * portions + " g flour";
}

function bpScones() {
	document.getElementById("bp_scones").innerHTML = 2 * portions + " teaspoons baking powder";
}

function saltScones() {
	var text = "pinch";
	if (portions == 1) {
		text = text;
	} else {
		text += "es";
	}
	document.getElementById("salt_scones").innerHTML = portions + " " + text + " of salt";
}

function butterScones() {
	document.getElementById("butter_scones").innerHTML = 50 * portions + " g butter";
}

function milkScones() {
	document.getElementById("milk_scones").innerHTML = 200 * portions + " ml milk";
}

// creme brulee

function eggYolk() {
	var text = "egg yolk";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("egg_yolk").innerHTML = portions + " " + text;
}

function milk() {
	document.getElementById("milk").innerHTML = 25 * portions + "ml full-fat milk";
}


function sugar() {
	document.getElementById("sugar").innerHTML = 10 * portions + "g sugar plus extra for the topping";
}

function cream() {
	document.getElementById("heavy_cream").innerHTML = 100 * portions + "ml heavy cream";
}

function vanilla() {
	var text = "vanilla pod";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("vanilla_pod").innerHTML = portions + " " + text;
}

// cronut
function yeastCronut() {
	var text = "once";
	if (0.25*portions <= 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("yeast").innerHTML = 0.25 * portions + " " + text + " active dry yeast";
}

function waterCronut() {
	var text = "cup";
	if (0.5 * portions <= 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("water").innerHTML = 0.5 * portions + " " + text + " of warm water";
}

function saltCronut() {
	var text = "teaspopn";
	if (portions <= 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("salt_cronut").innerHTML = portions + " " + text + " of fine salt";
}


function sugarCronut() {
	document.getElementById("sugar_cronut").innerHTML = 2.5 * portions + " cups of white sugar";
}

function milkCronut() {
	var text = "cup";
	if (0.5 * portions <= 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("milk_cronut").innerHTML = 0.5 * portions + " " + text + " of milk";
}

function butterCronut() {
	document.getElementById("melted_butter").innerHTML = 2 * portions + " tablespoons of melted butter";
}

function vanillaCronut() {
	var text = "teaspopn";
	if (portions <= 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("vanilla_extract").innerHTML = portions + " " + text + " of vanilla extract";
}

function eggCronut() {
	var text = "large egg";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("egg_cronut").innerHTML = portions + " " + text;
}

function nutmeg() {
	var text = "teaspopn";
	if (0.125 * portions <= 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("nutmeg").innerHTML = (0.125 * portions).toFixed(1) + " " + text + " of freshly grated nutmeg";
}

function flourCronut() {
	var text = "pound";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("flour_cronut").innerHTML = portions + " " + text + " all-purpose flour";
}

function euButter() {
	document.getElementById("european_butter").innerHTML = 12 * portions + " tablespoons of European-style (low-moisture) butter";
}

// värmlandstårta
function eggWhite() {
	document.getElementById("egg_white").innerHTML = 3 * portions + " äggvitor";
}
function kakao(){
	document.getElementById("kakao").innerHTML = 2 * portions + " msk kakao";
}
 function stroSocker() {
 	document.getElementById("strosocker").innerHTML = 100 * portions + " g strösocker";
 }
function hasselNotter() {
	document.getElementById("hasselnotter").innerHTML = 35 * portions + " g hackade hasselnötter";
}
function mandelSpan() {
	document.getElementById("mandelspan").innerHTML = "rostade mandelspån";
}
function eggyolkVl() {
	document.getElementById("eggyolk_vl").innerHTML = 3 * portions + " äggulor";
}
function graddeVl() {
	document.getElementById("gradde_vl").innerHTML = 75 * portions + " cl grädde";
}
function sockerVl() {
	document.getElementById("socker_kram_vl").innerHTML = 75 * portions + " g socker";
}
function smorVl() {
	document.getElementById("smor_vl").innerHTML = 100 * portions + " g rumsvarmt smör";
}

// tigerkaka

function butterTk() {
	document.getElementById("smor_tk").innerHTML = 200 * portions + " g smör";
}

function sockerTk() {
	document.getElementById("socker_tk").innerHTML = portions + " dl strösocker";
}

function eggTk() {
	document.getElementById("egg_tk").innerHTML = 3 * portions + " ägg";
}

function flourTk() {
	document.getElementById("flour_tk").innerHTML = 4 * portions + " dl vetemjöl";
}

function bpTk() {
	document.getElementById("bp_tk").innerHTML = portions + " tsk bakpulver";
}

function saltTk() {
	document.getElementById("salt_tk").innerHTML = portions + " krm salt";
}

function milkTk() {
	document.getElementById("milk_tk").innerHTML = 4 * portions + " dl mjölk eller grädde";
}

function kakaoTk() {
	document.getElementById("kakao_tk").innerHTML = 2 * portions + " msk kakao";
}

var myUrl = "";

$(".ratingForm input").click(function(){
	var id = this.id;
	var apiKey = "";
    var bakegoods = "";
	if (id == "tigercakeForm") {
		apiKey = "80f4dcc92ab360d3";
		bakegoods = "tigercake";
		console.log("this is tiger cake");
    }

    myUrl = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=" + apiKey + "&recipe=" + bakegoods;
});



// fetch rating result
$('.ratingForm input').click(function() {

	if(!isRated) {
		$('#votes').html('<img src="img/loader.gif">');
		$('#average').html('<img src="img/loader.gif">');
		console.log($(this).attr("id"));


		$.ajax({
			method: "GET",
//			url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=" + apiKey + "&recipe=" + bakegoods,
			url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=80f4dcc92ab360d3&recipe=tigercake",
//			url = myUrl;
			success: function(data) {
				console.log(JSON.stringify(data));
				$('#votes').text(data.votes);
				$('#average').text(data.rating.toFixed(1));
				setLocalStorage("key2", data.votes);
				setLocalStorage("key3", data.rating.toFixed(1));
			},
			error: function(jqXHR, textStatus, errorThrown) {
			  console.log(textStatus, errorThrown);
			}
		});
	}
});

$('.ratingForm input')

// rate
$('.ratingForm input').click(function() {
	if(!isRated) {
		myPoint = ($('input[name=rating]:checked', '.ratingForm').val());
		$(this).next().slideUp();
		$(this).next().slideDown();
		console.log("this element: " + this);

		// kate
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=0f69fc1a7bf82398&recipe=varmlandstarta
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=0f69fc1a7bf82398&recipe=varmlandstarta&rating=

		// cronut
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=939da50dc8380768&recipe=cronut
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=939da50dc8380768&recipe=cronut&rating=

		// scones
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=adcd44aec6944dff&recipe=scones
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=adcd44aec6944dff&recipe=scones&rating=4

		// tiger cake
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=80f4dcc92ab360d3&recipe=tigercake
		// https://edu.oscarb.se/sjk15/api/recipe/?api_key=80f4dcc92ab360d3&recipe=tigercake&rating=

		$.ajax({
			method: "GET",
//			url: myUrl + "&rating=" + myPoint,
//			url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=ade853a9ad825ff1&recipe=creme_brulee&rating=" + myPoint,
			url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=80f4dcc92ab360d3&recipe=tigercake&rating=" + myPoint,
			success: function(data) {
				console.log(JSON.stringify(data));
				console.log("status: " + data.status);
				$('#myRating').text(myPoint);
				$(':radio:not(:checked)').attr('disabled', true);
				isRated = true;
			},
			error: function(jqXHR, textStatus, errorThrown) {
			  console.log(textStatus, errorThrown);
			}
		});
	}
});

$('.ratingForm label').hover(function() {
	if (!isRated) {
		var	value = ($('input[name=rating]:hover', '.ratingForm').val());
		var i = 0;
		while (i <= value) {
			$('label[for=star' + i + ']').css('backgroundImage', "url('img/star_pink.png')");
			i++;
		}
	}
}, function() {
	if (!isRated) {
		$('.ratingForm label').css('backgroundImage', "url('img/star_grey.png')");
	}
});

function getLocalStorage(key) {
	if(typeof(window.localStorage) != 'undefined'){
		portions = window.localStorage.getItem(key);
	} else {
		throw "window.localStorage, not defined";
	}
	return portions;
}

function setLocalStorage(key, value) {
	if(typeof(window.localStorage) != 'undefined'){
		window.localStorage.setItem(key, value);
	}
	else{
		throw "window.localStorage, not defined";
	}
}

$(document).ready(function(){
	$.get("include/header.html", function(data) {
		$("#header").html(data);
	});

	$.get("include/footer.html", function(data) {
		$("#footer").html(data);
	});
});