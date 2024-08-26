// JavaScript Document
function animationFunc(e) {
    
		var screenRes = $(window).width(),
		screenHeight = $(window).height(),
		innerScreenRes = window.innerWidth; 
		
		if(screenRes > 767){

			//$('.animateElement').css('opacity', 0);

			jQuery.fn.isOnScreen = function(){
				var win = $(window);
				var viewport = {
					top : win.scrollTop(),
					left : win.scrollLeft()
				};
				viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();
		
				var bounds = this.offset();
				bounds.right = bounds.left + this.outerWidth();
				bounds.bottom = bounds.top + this.outerHeight();
				return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
			};
			
			jQuery(".animateElement").each(function () {
				var animationElement = $(this),
					delayAnimation = parseInt(animationElement.data('animation-delay')) / 1000,
					typeAnimation = animationElement.data('animation-type');
		
				if(animationElement.isOnScreen()) {
					if (!animationElement.hasClass("animated")) {
						animationElement.addClass("animated").addClass(typeAnimation).trigger('animateIn');
					}
					animationElement.css({
						'-webkit-animation-delay': delayAnimation + 's',
						'animation-delay': delayAnimation + 's'
					});
				}
				$(window).scroll(function () {
					var top = animationElement.offset().top,
						bottom = animationElement.outerHeight() + top,
						scrollTop = $(this).scrollTop(),
						top = top - screenHeight;
		
					if ((scrollTop > top) && (scrollTop < bottom)) {
						if (!animationElement.hasClass("animated")) {
							animationElement.addClass("animated").addClass(typeAnimation).trigger('animateIn');
						}
						animationElement.css({
							'-webkit-animation-delay': delayAnimation + 's',
							'animation-delay': delayAnimation + 's'
						});
						// Disable animation fill mode the reason that creates problems,
						// on hover animation some shortcodes and video full screen in Google Chrome
						var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
						jQuery('.animated').one(animationEnd, function() {
							$(this).addClass('fill-mode-none');
						});
					}
				});
			});

		} else{
			jQuery(".animateElement").each(function () {
				jQuery(this).removeClass('animateElement');
			})
		}
		 
	}


$(document).ready(function(e) {
	animationFunc();
})

$(window).resize(function(e) {
	animationFunc();
})
