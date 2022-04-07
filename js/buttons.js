

/*banner buttons*/
$(function(){
	$(document).one('click', '.like-review', function(e) {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> You liked this!');
		$(this).children('.fa-heart').addClass('animate-like');
		
	});
});

$(function(){
	$(document).one('click', '.info', function(e) {
		$(this).html('<i class="fa fa-circle-info" aria-hidden="true"></i> Thank You!');
		$(this).children('.fa-circle-info').addClass('animate-like');
		
	});
});

$(function(){
	$(document).one('click', '.shared', function(e) {
		$(this).html('<i class="fa fa-share" aria-hidden="true"></i> Thank You for Share!');
		$(this).children('.fa-share').addClass('animate-like');
		
	});
});

$(function(){
	$(document).one('click', '.trailer', function(e) {
		$(this).html('<i class="fa fa-circle-play" aria-hidden="true"></i> Thank You!');
		$(this).children('.fa-circle-play').addClass('animate-like');
		
	});
});
