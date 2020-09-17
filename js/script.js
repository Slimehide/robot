$(document).ready(function(){

	$(".scrollable__button").on("click" ,function(e){
		e.preventDefault();
		setQueryStringParameter("block" , $(this).attr("data-block"));
		if ($("#" + $(this).attr("data-block")).length) {
			if ($(window).width() < 991) {
				$("body,html").css("overflow-y" ,"auto");
				$(".menu__header").css("top" ,"-100vh");
				$(".menu__button").removeClass("active__menu");
				$(this).removeClass("active__menu");
			}
			if ($(window).width() < 640) {
				$(".header__buttons").css("top" , "-100vh");
			}
			if ($(this).attr("data-block") == "home") {
				$('html').animate({ 
		            scrollTop: $("#" + $(this).attr("data-block")).offset().top -84
		        }, 900 );
			} else{
				$('html').animate({ 
		            scrollTop: $("#" + $(this).attr("data-block")).offset().top 
		        }, 900 );
			}
			
		} else {
			window.location.href = "index.html?block=" + $(this).attr("data-block");
		}
		
	});


	$(".top__foot>a").on("click" ,function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0},1200);
	});

	$(".first__button>a").on("click" ,function(e){
		e.preventDefault();
		$('html').animate({ 
            scrollTop: $(".second__info").offset().top - 90
        }, 500 );
	});

	$(".overlay__plug>a").on("click" ,function(e){
		e.preventDefault();
		$('.overlay__plug').css("display" , "none");
		$('.wrap__vimeo').css("display" , "block");
	});

	$(".menu__button").on("click" ,function(e){
		if ($(this).hasClass("active__menu")) {
			$("body,html").css("overflow-y" ,"auto");
			$(".center__menu").css("top" ,"-100vh");
			$(this).removeClass("active__menu");
			if ($(window).width() < 640) {
				$(".header__buttons").css("top" , "-100vh");
			}
		} else {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			$(".center__menu").css("top" ,"0px");
			$(this).addClass("active__menu");
			$("body,html").css("overflow-y" ,"hidden");
			if ($(window).width() < 640) {
				$(".header__buttons").css("top" , "0");
			}
		}
	});

	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = window.location.search.substring(1),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;
	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	        }
	    }
	};
	function setQueryStringParameter(name, value) {
	    const params = new URLSearchParams(window.location.search);
	    params.set(name, value);
	    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
	}
	function updateUrlParameter(param, value) {
	    const regExp = new RegExp(param + "(.+?)(&|$)", "g");
	    const newUrl = window.location.href.replace(regExp, param + "=" + value + "$2");
	    window.history.pushState("", "", newUrl);
	}
	function clearHistory(){
		window.history.pushState({}, document.title, window.location.protocol + "//" + window.location.host + window.location.pathname);
	}

	var blockPath = getUrlParameter('block');
	if (blockPath != undefined) {
		setTimeout(function(){
			if (blockPath == "home") {
				$('html').animate({ 
		            scrollTop: $("#" + blockPath).offset().top - 90
		        }, 500 );
			} else {
				$('html').animate({ 
		            scrollTop: $("#" + blockPath).offset().top + 20
		        }, 500 );
			}
			
		} ,300);		
	}
});