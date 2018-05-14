/* ========== Block 7 - Carousel ==========*/

var $carousel = $('.gallery');

$carousel.on('staticClick.flickity', function (event, pointer, cellElement, cellIndex) {
	if (typeof cellIndex == 'number') {
		$carousel.flickity('selectCell', cellIndex);
	}
});

