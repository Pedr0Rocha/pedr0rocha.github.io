$(document).ready(function() {
    $(".imgLiquidFill").imgLiquid();

	$("#owl-votacao1").owlCarousel({
		autoPlay: 5000,

		items : 2,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: true,
		scrollPerPage: true
	});
	$("#owl-votacao2").owlCarousel({
		autoPlay: 5000,

		items : 2,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: true,
		scrollPerPage: true
	});
	$("#owl-votacao3").owlCarousel({
		autoPlay: 5000,

		items : 2,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: true,
		scrollPerPage: true
	});
	$("#owl-venda").owlCarousel({
		autoPlay: false,

		items : 1,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: false
	});
	$("#owl-gang").owlCarousel({
		autoPlay: false,

		items : 1,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		pagination: false,
		navigation: true,
		navigationText: [
   			"<i class='fa fa-chevron-left'></i>",
  			"<i class='fa fa-chevron-right'></i>"
  		]
		});
	$("#owl-miniaturas").owlCarousel({
		autoPlay: false,

		items : 10,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsMobile: [800, 3],
		pagination: false
	});
});

$(window).load(function() {
	fixVotacao();
});

function abreTexto(num, btn) {
	if ($(btn).text() == "Ver mais") {
		var currentHeight = $('#texto-votacao' + num).height();
		$('#texto-votacao' + num).css('height', 'auto');
		var adjustedHeight = $('#texto-votacao' + num).height();

		$('#texto-votacao' + num).height(currentHeight).animate({
			height: adjustedHeight }, 500
		);
		btn.innerText = "Ver menos";

	} else if ($(btn).text() == "Ver menos") {
		$('#texto-votacao' + num).animate({
			height: '80px' }, 500 
		);
		btn.innerText = "Ver mais";
	}
}

function fixVotacao() {
	for (var i = 1; i < 4; i++) {
		var infoHeight = $('#info-votacao'+i).height();
		$('#foto-votacao'+i).height(infoHeight);
		$('#foto-votacao'+i + " img").height(infoHeight);
	}
}

function votacao(num) {
	alert("Obrigado por votar na opção " + num);
}

function slideTo(value, owl) {
	var carousel = $(owl);  
	carousel.trigger('owl.goTo', value);
}

function selectTamanho(num) {
	for (var i = 1; i < 6; i++)
		$("#blocoTamanho" + i).removeClass("selected");
	$("#blocoTamanho" + num).addClass("selected");
}

function toggleMenuMobile() {
	var menuMobile = $("#menu-mobile");
	if (menuMobile.hasClass("open"))
		menuMobile.removeClass("open").addClass("closed");
	else
		menuMobile.removeClass("closed").addClass("open");
}

function scrollCustom(id) {
	$('html, body').animate({scrollTop:$('#' + id).offset().top}, 'slow');
}
