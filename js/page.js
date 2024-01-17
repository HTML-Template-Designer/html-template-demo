
jQuery(document).ready(function($) {
	
	/* Click color change image product */
  jQuery('.engoj_select_color a').each(function() {
    jQuery(this).on("click", function() {
      var engoImage = jQuery(this).data('engojvariant-img');
      jQuery(this).parents('.engoj_grid_parent').find('.engoj_find_img img').attr({
        src: engoImage
      });
      return false;
    });
  });
  
		// slideProductDetail2
            $('.js_prod_main2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dot: false,
            fade: true,
            
            infinite: false,
            asNavFor: '.js_prod_sub2'
          });
          $('.js_prod_sub2').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.js_prod_main2',
            dots: false,
            arrows: true,
            
            prevArrow: '<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
            infinite: false,
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  infinite: false,
                }
              }, 
              {
                breakpoint: 768,
                settings: {
                  infinite: false,
                }
              },
              {
                breakpoint: 575,
                settings: {
                  infinite: false,
                }
              }
            ]
          });



	//首页banner
	//slidehome7
	          $('.slick-side-h7').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3500,
            infinite: true,
            dots: false,
            arrows: true,
            prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            fade: true, 
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  infinite: true,
                  dots: false ,
                  arrows: true
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  dots: false ,
                  arrows: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  dots: false ,
                  arrows: true
                }
              },
              {
                breakpoint:600,
                settings: {
                  dots: false ,
                  arrows: true,
                  autoplay: true
                }
              }
            ]
          });
	
});