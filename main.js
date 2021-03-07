// OWL CAROUSEL 2:

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false
});

// LIGHTBOX:

lightbox.option({
	'albumLabel' : "Zdjęcie %1 z %2",
	'disableScrolling' : "false"
})