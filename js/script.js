/* ========== Block 7 - Carousel ==========*/

var $carousel = $('.gallery');

$carousel.on('staticClick.flickity', function (event, pointer, cellElement, cellIndex) {
	if (typeof cellIndex == 'number') {
		$carousel.flickity('selectCell', cellIndex);
	}
});


// /*
// ==============================
// MENU HOVER EFFECT
// ==============================
// */

// var bgColorMenuButton = $(".dropdown-menu").css("background-color");

// $( ".dropdown-menu" ).css('margin-top',0);
// $( ".dropdown" )
// .mouseover(function() {
//   $( this ).addClass('show').attr('aria-expanded',"true");
//   $( this ).find('.dropdown-menu').addClass('show');

//   if ($(".dropdown-menu.dropdown-menu-right").hasClass("show")) {
//     $( this ).find(".nav-link.dropdown-toggle.uppercase.outline").css({
//       "background-color": "#000",
//       "color":"#fff"});
//       $( this ).find(".dropdown-menu.dropdown-menu-right").css({
// 							// "position": "absolute", 
// 							"will-change": "transform", 
// 							"top": "0px",
// 							"left": "0px",
// 							"transform": "translate3d(-85px, 44px, 0px)"
// 						});
//       }
//     })
//     .mouseout(function() {
//       $( this ).removeClass('show').attr('aria-expanded',"false");
//       $( this ).find('.dropdown-menu').removeClass('show');
//       $( this ).find('.nav-link.dropdown-toggle.uppercase.outline').css({
//         "background-color": "transparent",
// 								"color":"#afb0b1"});
// 					$(this).find(".dropdown-menu.dropdown-menu-right").css({
// 						// "position": "absolute",
// 						"will-change": "auto",
// 						"top": "100%",
// 						"left": "auto",
// 						"transform": "none"
// 					});
//       }
//     )
//     ;
