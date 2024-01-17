$(document).ready(function(){
	// search
	$('.js-search-destop').on('click', function() {
		$('.js-box-search').addClass('active');
		$('.bg_search_box').addClass('active');
		$('body').addClass('activedestop');
	});
	$('.js-drawer-close').on('click', function() {
		$('.js-box-search').removeClass('active');
		$('.bg_search_box').removeClass('active');
		$('body').removeClass('activedestop');
	});
	$('.bg_search_box').on('click', function() {
		$('.js-box-search').removeClass('active');
		$('.bg_search_box').removeClass('active');
		$('body').removeClass('activedestop');
	});
	  
	// menumobile
	$('.menuleft').on('click', function() {
		$(this).toggleClass('active');
		$('.box_contentmenu').toggleClass('active');
		$('.box_contentmenu_background').toggleClass('active');
		$('body').addClass('activemenu_mobile')
	});
	$('.box_contentmenu_background').on('click', function() {
		$(this).removeClass('active');
		$('.box_contentmenu').removeClass('active');
		$('.menuleft').removeClass('active');
		$('.box_contentmenu_background').removeClass('active');
		$('body').removeClass('activemenu_mobile');
	});
	$('.js-eveland-close').on('click', function() {
		$(this).removeClass('active');
		$('.box_contentmenu').removeClass('active');
		$('.menuleft').removeClass('active');
		$('.box_contentmenu_background').removeClass('active');
		$('body').removeClass('activemenu_mobile');
	});
	
	// jsmenuiconh
	$('.js_icon_horizon-menu').on('click', function() {
		$(this).parents().addClass('active');
	});
	$('.js-back').on('click', function() {
		$(this).parents().parents().find('.menu-horizon-list').removeClass('active');
	});
	// jschangeborder
	$('.js_change_border').on('click', function() {
		$('.js_change_border').parent().find('.js_change_border').removeClass('active')
		$(this).addClass('active');
	});
	
	
	// sidebar
	$(function() {
		$(".parent .fa.fa-plus").remove();
		$(".parent .toggled").append("<i class='fa fa-plus'></i>");
		$('.parent .toggled').click(function(e) {
			e.preventDefault();
			if (!$(this).parent().hasClass('active')) {
				$('+ ul', $('a.list-group-item.main-item')).slideUp();
				$('a.list-group-item.main-item').removeClass('active');
			}
			$(this).parent().toggleClass('active');
			$('+ ul', $(this).parent()).slideToggle('slow');
			return false;
		});
	});
	
})



