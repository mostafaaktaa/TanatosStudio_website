/*global $, alert, console*/
$(function(){
    
    'use strict';
    
 	//Trigger Nice Scroll Plugin

    $("html").niceScroll({
    	cursorcolor:'#f7600e',
    	cursorwidth:10
    });

    // Change Header Height

    $('.header').height($(window).height());
    

    // scroll to features

    $('.header .arrow i').click(function(){
    	$('html, body').animate({
    		scrollTop:$('.features').offset().top
    	},1000);
    });

    $('.hire').click(function(){
    	$('html, body').animate({
    		scrollTop:$('.our-team').offset().top
    	},1000);
    });

    // show hidden item from works
    $('.show-more').click(function(){
    	$('.our-work .hidden').fadeIn(2000);
    });

    //check testimonials

    var leftArrow=$('.testim .fa-chevron-left'),
    	rightArrow=$('.testim .fa-chevron-right');


    function checkClient(){

    	if($('.client:first').hasClass('active')){

    		leftArrow.fadeOut();
    	}

    	else{

    		leftArrow.fadeIn();
    	}

    	if($('.client:last').hasClass('active')){

    		rightArrow.fadeOut();
    	}
    	else{

    		rightArrow.fadeIn();
    	}

    }


    checkClient();

    $('.testim i').click(function(){

    	if($(this).hasClass('fa-chevron-right')){

    		$('.testim .active').fadeOut(100,function(){

    			$(this).removeClass('active').next('.client').addClass('active').fadeIn();

    			checkClient();
    		});
    		
    	}
    	else{

    		$('.testim .active').fadeOut(100,function(){

    			$(this).removeClass('active').prev('.client').addClass('active').fadeIn();

    			checkClient();
    		});

    	}

    });


});
