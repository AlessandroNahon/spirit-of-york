var drinksParty = {};

var md = new MobileDetect(window.navigator.userAgent);
var isMobile = md.mobile();
var isPhone = md.phone();
var isTablet = md.tablet();

var ProductUrl = 'http://lcboapi.com/products?access_key=';
var StoreUrl = 'http://lcboapi.com/stores/'
var key = 'MDplYjYyYTU0MC0zNGY0LTExZTctYmQxNy1lM2RjOWNhZWI0NDk6YzZ4RmZ5TEhSMnZBc0RXdW0yeUlKdlE0YXRPQTRYMHRKQUF1'

$(function(){
	drinksParty.init();
	
	var currentPage = window.location.href.split('/')[3];
		drinksParty.hamburger();
		// drinksParty.teamSelect();
		drinksParty.contactSelect();
		$('p').each(function() {
		 var $this = $(this);
		 if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
		     $this.remove(); }); 
		if(currentPage == '') {
			drinksParty.ageCheck();
		} else {
			return false;
		}
		
		drinksParty.hamburger();
		drinksParty.linkAnimation();
		// if(isMobile) {
		// 	$(".link-link").on("touchend", function(event) {

		// 	    window.location.href = $(event.target).attr('href');

		// 	    console.log(window.location.href);
		// 	});
		// }

		$('#searchForm').on('submit', function(event){
			event.preventDefault();
			var searchTerm = $('.input').val();
			console.log('searchTerm:', searchTerm);
			$('.input').val('');
			drinksParty.getSpirit(searchTerm);

		});

		// drinksParty.getSpirit();
		// drinksParty.getStores();
		// drinksParty.initMap();
	


});

drinksParty.initMap = function() {
  var uluru = {lat: 43.673626, lng: -79.410902};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

drinksParty.getSpirit = function(query) {
	$.ajax({
	  url: ProductUrl + '&per+page=10',
	  authorization: key,
	  method: 'GET',
	  dataType: 'jsonp',
	  data: {
	  	type: 'products',
	  	q: query
	  }
	}).then(function(data, item) {
	  var result = data.result;
	  console.log('result:', result);
	  drinksParty.displayBooze(result);
	});
}

drinksParty.displayBooze = function(data, item) {
	$('.spirit-display').empty();

	data.forEach(function(item){
		var image = item.image_url;
		var foodContainer = $('<div>').addClass('productContainer');

		var foodImage = $('<img>').attr('src', image);

		foodContainer.append(foodImage);

		$('.spirit-display').append(foodContainer);
	});
}
// + {storeID} + '/products' + {productID} + '/inventory'

var userLatitude = drinksParty.newlat;
var userLongitude = drinksParty.newlong;

drinksParty.getStores = function(userLatitude, userLongitude) {
	$.ajax({
		url: StoreUrl + '?lat=' + 43.673626 + '&lon=' + -79.410902,
		method: 'GET',
		dataType: 'jsonp',
		headers: { 'Authorization': 'Token MDplYjYyYTU0MC0zNGY0LTExZTctYmQxNy1lM2RjOWNhZWI0NDk6YzZ4RmZ5TEhSMnZBc0RXdW0yeUlKdlE0YXRPQTRYMHRKQUF1' }
		// data: {
		// 	product_id: 
		// }
	}).then(function(data){
		data.result.map(function(item){
			console.log('address:', item.address_line_1);
			console.log('longitude:', item.longitude);
			console.log('latitude:', item.longitude);
		});

		// foodApp.store1LatLng.lat = data.result[0].latitude;
		// foodApp.store1LatLng.lng = data.result[0].longitude;
		// // console.log(data.result[0].longitude);

		// lcboLocalArray = [data.result[0].latitude, data.result[0].longitude];

		// foodApp.lcboLocations = {
		// 	   	userLocal: {
		// 	   		lat: userLatitude,
		// 	   		lng: userLongitude
		// 	   	},
		// 	   	store1: {
		// 	   		lat: data.result[0].latitude,
		// 	   		lng: data.result[0].longitude
		// 	   	},
		// 	   	store1Meta:{
		// 	   		add: data.result[0].address_line_1,
		// 	   		phn: data.result[0].telephone
		// 	   	},
		// 	   	store2: {
		// 	   		lat: data.result[1].latitude,
		// 	   		lng: data.result[1].longitude
		// 	   	},
		// 	   	store2Meta:{
		// 	   		add: data.result[1].address_line_1,
		// 	   		phn: data.result[1].telephone
		// 	   	},
		// 	   	store3: {
		// 	   		lat: data.result[2].latitude,
		// 	   		lng: data.result[2].longitude
		// 	   	},
		// 	   	store3Meta:{
		// 	   		add: data.result[2].address_line_1,
		// 	   		phn: data.result[2].telephone
		// 	   	},
		// 	   	store4: {
		// 	   		lat: data.result[3].latitude,
		// 	   		lng: data.result[3].longitude
		// 	   	},
		// 	   	store4Meta:{
		// 	   		add: data.result[3].address_line_1,
		// 	   		phn: data.result[3].telephone
		// 	   	},
		// 	   	store5: {
		// 	   		lat: data.result[4].latitude,
		// 	   		lng: data.result[4].longitude
		// 	   	},
		// 	   	store5Meta:{
		// 	   		add: data.result[4].address_line_1,
		// 	   		phn: data.result[4].telephone
		// 	   	},
		// 	   	store6: {
		// 	   		lat: data.result[5].latitude,
		// 	   		lng: data.result[5].longitude
		// 	   	},
		// 	   	store6Meta:{
		// 	   		add: data.result[5].address_line_1,
		// 	   		phn: data.result[5].telephone
		// 	   	},
		// 	   	store7: {
		// 	   		lat: data.result[6].latitude,
		// 	   		lng: data.result[6].longitude
		// 	   	},
		// 	   	store7Meta:{
		// 	   		add: data.result[6].address_line_1,
		// 	   		phn: data.result[6].telephone
		// 	   	},
		// 	   	store8: {
		// 	   		lat: data.result[7].latitude,
		// 	   		lng: data.result[7].longitude
		// 	   	},
		// 	   	store8Meta:{
		// 	   		add: data.result[7].address_line_1,
		// 	   		phn: data.result[7].telephone
		// 	   	},
		// 	   	store9: {
		// 	   		lat: data.result[8].latitude,
		// 	   		lng: data.result[8].longitude
		// 	   	},
		// 	   	store9Meta:{
		// 	   		add: data.result[8].address_line_1,
		// 	   		phn: data.result[8].telephone
		// 	   	},
		// 	   	store10: {
		// 	   		lat: data.result[9].latitude,
		// 	   		lng: data.result[9].longitude
		// 	   	},
		// 	   	store10Meta:{
		// 	   		add: data.result[9].address_line_1,
		// 	   		phn: data.result[9].telephone
		// 	   	},
		// 	   	store11: {
		// 	   		lat: data.result[10].latitude,
		// 	   		lng: data.result[10].longitude
		// 	   	},
		// 	   	store11Meta:{
		// 	   		add: data.result[10].address_line_1,
		// 	   		phn: data.result[10].telephone
		// 	   	},
		// 	   	store12: {
		// 	   		lat: data.result[11].latitude,
		// 	   		lng: data.result[11].longitude
		// 	   	},
		// 	   	store12Meta:{
		// 	   		add: data.result[11].address_line_1,
		// 	   		phn: data.result[11].telephone
		// 	   	},
		// 	   	store13: {
		// 	   		lat: data.result[12].latitude,
		// 	   		lng: data.result[12].longitude
		// 	   	},
		// 	   	store13Meta:{
		// 	   		add: data.result[12].address_line_1,
		// 	   		phn: data.result[12].telephone
		// 	   	},
		// 	   	store14: {
		// 	   		lat: data.result[13].latitude,
		// 	   		lng: data.result[13].longitude
		// 	   	},
		// 	   	store14Meta:{
		// 	   		add: data.result[13].address_line_1,
		// 	   		phn: data.result[13].telephone
		// 	   	},
		// 	   	store15: {
		// 	   		lat: data.result[14].latitude,
		// 	   		lng: data.result[14].longitude
		// 	   	},
		// 	   	store15Meta:{
		// 	   		add: data.result[14].address_line_1,
		// 	   		phn: data.result[14].telephone
		// 	   	},
		// 	   	store16: {
		// 	   		lat: data.result[15].latitude,
		// 	   		lng: data.result[15].longitude
		// 	   	},
		// 	   	store16Meta:{
		// 	   		add: data.result[15].address_line_1,
		// 	   		phn: data.result[15].telephone
		// 	   	},

		// 	   }
		// 	   //store the array with all local in here
		// 	  foodApp.createMarkers(foodApp.lcboLocations);

	});

}

drinksParty.ageCheck = function() {
	TweenMax.set($('#legal'), {autoAlpha:1, display:'flex'});

	// Creating a div element
	var legal = document.createElement("Div");
	legal.id = "legal";

	var img = new Image();
	legal.appendChild(img);
	img.src = 'wp-content/themes/spirit-of-york/images/YorkIcon.png';

	// Adding a paragraph to it
	var paragraph = document.createElement("P");
	var text = document.createTextNode("Are you above the legal drinking age?");
	paragraph.appendChild(text);
	legal.appendChild(paragraph);

	var buttons = document.createElement("Div");
	buttons.id = "buttons";
	legal.appendChild(buttons);

	// Adding a buttons
	var yes = document.createElement("Button");
	var textForYes = document.createTextNode("yes");
	yes.appendChild(textForYes);
	buttons.appendChild(yes);

	var no = document.createElement("Button");
	var textForNo = document.createTextNode("no");
	no.appendChild(textForNo);
	buttons.appendChild(no);

	// Appending the div element to body
	document.getElementsByClassName("main-home")[0].appendChild(legal);


	setCookie = function (c_name,value,exdays) {
	    var exdate=new Date();
	    exdate.setDate(exdate.getDate() + exdays);
	    var expires = exdate.toUTCString();
	    var isIE8 = (document.documentMode !== undefined);
	    if (exdays == 0) {
	        expires = (isIE8 == true) ? "" : "0";
	    }
	    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+expires);
	    document.cookie=c_name + "=" + c_value;
	}	    



	getCookie = function(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	    }
	    return "";
	}

	deleteCookie = function(name) {
	  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	if (getCookie('visited')) {
    	TweenMax.to(legal, {autoAlpha:0, ease:Linear.easeOut, onComplete: function(){
    		TweenMax.to([$('.main-home'), $('.main-home footer')], 0.3, {autoAlpha:1, display: 'block'});
    	}});
	    deleteCookie('visited');
	} else {
	    setCookie('visited','true',null);
	}



	yes.onclick = function(){

		TweenMax.to(legal, 0.3, {autoAlpha:0, ease:Linear.easeOut, onComplete: function(){
			drinksParty.landingAnimateIn();
			landingTimeline.play();
			
		}});

		// drinksParty.init();
	}

	no.onclick = function(){
		alert("Sorry bud, you're not old enough.");
		location.href='http://google.com';
	}
}

drinksParty.drawSVG = function() {

}

drinksParty.contactSelect = function() {
	var contactNav = $('.contact-page .contact-section .contact-tab ul li');

	contactNav.click(function(){
		var experience = $('.contact-tab #experience');
		var book = $('.contact-tab #book');
		var tabName = $(this).attr('id');
		if(tabName == 'experience') {
			experience.addClass('active-tab');
			book.removeClass('active-tab');
			$('.Experience').css({display: 'block'});
			$('.Book').css({display:'none'});
			$('#wpcf7-f235-p133-o2').css({display:'none'});
			$('#wpcf7-f234-p133-o1').css({display:'block'});
			$('.email').html('info@spiritofyork.com');
			$('.email').attr('href','mailto:info@spiritofyork.com');
		} else if(tabName == 'book') {
			experience.removeClass('active-tab');
			book.addClass('active-tab');
			$('.Experience').css({display: 'none'});
			$('.Book').css({display:'block'});
			$('#wpcf7-f235-p133-o2').css({display:'block'});
			$('#wpcf7-f234-p133-o1').css({display:'none'});
			// $('.email').html('events@spiritofyork.com');
			// $('.email').attr('href','mailto:events@spiritofyork.com');
		}
	});
}

drinksParty.hamburger = function() {
	var hamburger = $('.hamburger');
	var mainNav = $('header .navigation');
	var navItems = $('.navigation ul li');
	TweenMax.set(mainNav, {autoAlpha:0, right:'-275px'});
	var activeNav = false;

	hamburger.on('click', function(){
		if(activeNav == false) {
			activeNav = true;
			TweenMax.to(mainNav, 0.1, {autoAlpha:1, ease:Linear.easeOut, onComplete: function(){
				TweenMax.to(mainNav, 0.5, {right:0, ease:Power2.easeOut, onComplete: function(){
					if(isPhone) {
						TweenMax.fromTo(navItems, 0.3, {autoAlpha:0}, {autoAlpha:1, ease:Linear.easeOut})
					}
				}});
			}});

			if(isPhone) {
				TweenMax.set(navItems, {autoAlpha:0});
				hamburger.html('close');
			} else if (isTablet) {
				TweenMax.to(hamburger, 0.5, {x:-250, ease:Power2.easeOut});
			} 
			else {
				TweenMax.to(hamburger, 0.5, {x:-250, ease:Power2.easeOut});
			}
		} else if(activeNav == true) {
			activeNav = false;
			TweenMax.to(mainNav, 0.5, {right:-275, ease:Power1.easeOut, onComplete: function(){
				TweenMax.to(mainNav, 0.1, {autoAlpha:0, ease:Linear.easeOut});
			}});

			if(isPhone) {
				hamburger.html('menu');
			} else if(isTablet) {
				TweenMax.to(hamburger, 0.5, {x:0, ease:Power1.easeOut});
			} else {
				TweenMax.to(hamburger, 0.5, {x:0, ease:Power1.easeOut});
			}

		}
	});

	var menuItems = $('header .menu').find('li');

	menuItems.click(function(){
		activeNav = false;
		TweenMax.to(mainNav, 0.5, {x:350, ease:Power1.easeOut});
		TweenMax.to(hamburger, 0.5, {x:0, ease:Power1.easeOut});
	});
}

drinksParty.landingAnimateIn = function() {
	landingTimeline = new TimelineMax({paused:true});
	landingTimeline.add([
		TweenMax.fromTo(landing, 0.3, {autoAlpha:1}, {autoAlpha:0, display:'none', delay:3, ease:Linear.easeOut, onComplete: function() {

			TweenMax.to([$('.main-home'), $('.main-home footer')], 0.3, {autoAlpha:1, display: 'block'})

		}})

	]);
}

drinksParty.linkAnimation = function() {
	drinksParty.init();

	var heritage = $('.hover-text.Heritage');
	var product = $('.hover-text.Product');
	var vitality = $('.hover-text.Vitality');

	var link = $('.link');
	link.map(function(index, value){
		var linkName = $(value).attr('id');

		value.addEventListener('mouseenter', function(){

			if(isMobile) {

			} else {
				if(linkName == 'The Vitality') {
					TweenMax.to(vitality,1, {autoAlpha:1, display:'block'});
				} else if(linkName == 'The Product') {
					TweenMax.to(product,1, {autoAlpha:1, display:'block'});
				} else if(linkName == 'The Heritage'){
					TweenMax.to(heritage,1, {autoAlpha:1, display:'block'});
				} else {
					return false;
				}
			}
		});

		value.addEventListener('mouseleave', function(){
			if(isMobile) {

			} else {
				if(linkName == 'The Vitality') {
					TweenMax.to(vitality,.01, {autoAlpha:0, display:'none'});
				} else if(linkName == 'The Product') {
					TweenMax.to(product,.01, {autoAlpha:0, display:'none'});
				} else if(linkName == 'The Heritage'){
					TweenMax.to(heritage,.01, {autoAlpha:0, display:'none'});
				} else {
					return false;
				}
			}
		});
	});


}

drinksParty.init = function() {
	// drinksParty.getSpirit();



	
	var landing = document.getElementById('landing');
	var links = document.getElementsByClassName('links')[0];



}


