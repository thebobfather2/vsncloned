// ------------------------------------------------------------------------------------------------------------------
// This is main JS file that contains custom JS scipts and initialization used in this template
// ------------------------------------------------------------------------------------------------------------------
// Theme Name: UROK: Responsive Multipurpose HTML5 Theme
// Theme URI: http://urok.themirrorimages.eu
// Author: TheMirrorImages
// Author URI: http://www.themirrorimages.eu
// Version: 1.2
// ------------------------------------------------------------------------------------------------------------------

(function(){
    "use strict";

    
/* --------------------------------------------------
Page Loader
---------------------------------------------------- */
    
    
    $(window).load(function () {
        $(".loader").delay(200).fadeOut(800);
        $("#pageloader").delay(1000).fadeOut(500);
        setTimeout(function () { $("body").css({'overflow': 'visible'}) }, 1000);
        $('#menu').delay(1000).css({'opacity': '1'})
    });
    

/* --------------------------------------------------
Lines Animation
---------------------------------------------------- */
    
    $(window).load(function () {
        $(".lines-home").each(function() {

            var maska = $(".home-mask").css("opacity");
            $(".home-mask").css("opacity","0");

            setTimeout(function () {
                $(".home-title").fadeTo(1000,1);
            }, 2000);
            setTimeout(function () {
                $(".home-subtitle").fadeTo(1000,1);
            }, 2500);

            setTimeout(function () {
                $(".line-home.line-top").addClass("on");
                $(".home-mask").fadeTo(1000,maska);
            }, 3000);
            setTimeout(function () {
                $(".line-home.line-right").addClass("on");
            }, 3300);
            setTimeout(function () {
                $(".line-home.line-bottom").addClass("on");
            }, 3400);
            setTimeout(function () {
                $(".line-home.line-left").addClass("on");
            }, 3700);
            setTimeout(function () {
                $(".line-home-hover").addClass("on");
            }, 4000);

        });
    });
    
    
/* --------------------------------------------------
Initialization
---------------------------------------------------- */   

    $(window).load(function () {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        parallaxon();
        js_fix_height();
        js_fun_height();
        fun_Portfolio();
        js_modules();
    });
    
    $(document).ready(function(){     
        $(window).trigger("resize"); 
        js_height_100();
        js_transparent_menu();
        js_hs_height();
    });

    $(window).resize(function(){   
        parallaxon();
        js_height_100();
        js_fix_height();
        js_fun_height();
        js_transparent_menu();
        js_hs_height();
        fun_Portfolio();
        js_modules();
    });

    
/* --------------------------------------------------
Detect Platform
---------------------------------------------------- */  

    $(function(){

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        if(!isMobile.any())
        {
            $("html").addClass("no-mobile");
        }
        else {
            $("html").addClass("mobile");
        }
        
    }); 


/* --------------------------------------------------
Detect Touch
---------------------------------------------------- */

    if (!("ontouchstart" in document.documentElement)) {
        $("html").addClass("no-touch");
    }


/* --------------------------------------------------
Height 100%
---------------------------------------------------- */   

    function js_height_100(){
        var windowHeight = $(window).height();
        $(".js-height-100").css("height",windowHeight); 
    }


/* --------------------------------------------------
Detect Height
---------------------------------------------------- */  

    function js_fix_height() {
        if ( $(".check-media").width() >= 1200 ) {
            $(".js_fix_height").each(function() {
                var getHeight = 0;
                $(this).find(".js-height-get").each(function() {
                    if ( $(this).outerHeight() > 300 ) {
                        getHeight = $(this).outerHeight(); 
                    }
                    else {
                        getHeight = 300;
                    }
                });
                $(this).find(".js-height-set").each(function() {
                }).height(getHeight);
            });
        }
        else {
            $(".js-height-set").css("height","400px");
        }
    }    

	function js_fun_height() {
		$(".js-fun-height").each(function() {
			var maxHeight = 0;
			$(this).find(".js-el-fun-height").each(function() {
                $(this).height("");
				if ($(this).height() > maxHeight) {
		            maxHeight = $(this).height();  
		        }
			}).height(maxHeight);
		});
	}


/* --------------------------------------------------
Transparent Menu
---------------------------------------------------- */ 

    function js_transparent_menu() {
        
        $(window).scroll(function () {
            var scrollStart = 200;
            $(".js-transparent").each(function() {
                if ($(window).scrollTop() > scrollStart) {
                    $(".js-transparent").removeClass("transparent");
                } else {
                    $(".js-transparent").addClass("transparent");
                }
            });
            $("#breadcrumbs-wrap").each(function() {
                if ($(window).scrollTop() > scrollStart) {
                    $("#breadcrumbs-wrap").removeClass("display");
                } else {
                    $("#breadcrumbs-wrap").addClass("display");
                }
            });
            if ($(window).scrollTop() > scrollStart) {
                $(".tminav").addClass("navbar-small-height");
                $(".logo-scroll").removeClass("hide");
                $(".logo-start").addClass("hide");            
            } else {
                $(".tminav").removeClass("navbar-small-height");
                $(".logo-scroll").addClass("hide");
                $(".logo-start").removeClass("hide");
            }
        });
        
    }


/* --------------------------------------------------
Backgrounds
---------------------------------------------------- */ 

    var bgclass = $(".bg");
    bgclass.each(function(indx){        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
        if ($(this).attr("data-height-background")){
            $(this).css("height", $(this).data("height-background") + "px");
        }
    });


/* ---------------------------------------------
 Mmenu options
 --------------------------------------------- */
    
    $(document).ready(function () {
        var $menu = $('nav#menu'),
            $html = $('html, body');
        $menu.mmenu({
            "extensions": [
                "border-none",
                "theme-dark"
            ],
            "offCanvas": {
                "position": "right"
            },
            "navbars": [
                {
                    "position": "top",
                    "content": [
                        "prev",
                        "title",
                        "close"
                    ]
                }
            ]
        });
        var $anchor = false;
        $menu.find('li > a').on(
            'click',
            function (e) {
                $anchor = $(this);
            }
        );
        var api = $menu.data('mmenu');
        api.bind('closed',
            function () {
                if ($anchor) {
                    var href = $anchor.attr('href');
                    $anchor = false;
                    //	if the clicked link is linked to an anchor, scroll the page to that anchor 
                    if (href.slice(0, 1) == '#') {
                        $html.animate({
                            scrollTop: $(href).offset().top
                        }, 800);
                    }
                }
            }
        );
    });
    
    
/* ---------------------------------------------
 Menu scroll (One Page)
 --------------------------------------------- */
    
    $(function() {
        $('.scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 800);
            event.preventDefault();
            $(".navbar-collapse.collapse").removeClass("in");
        });
    });

  
/* ---------------------------------------------
 Animation
 --------------------------------------------- */   
    
    $(window).load(function () {

        function onScrollInit( items, trigger ) {
          items.each( function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr("data-os-animation"),
                osAnimationDelay = osElement.attr("data-os-animation-delay");

                osElement.css({
                  "-webkit-animation-delay":  osAnimationDelay,
                  "-moz-animation-delay":     osAnimationDelay,
                  "animation-delay":          osAnimationDelay
                });

                var osTrigger = ( trigger ) ? trigger : osElement;
                osTrigger.waypoint(function() {
                  osElement.addClass("animated").addClass(osAnimationClass);
                  },{
                      triggerOnce: true,
                      offset: "90%"
                });
          });
        }

         onScrollInit( $(".os-animation") );

    });
    
    
/* --------------------------------------------------
Setting Height Photo in Half Section
---------------------------------------------------- */ 

    function js_hs_height() {
        var hs_width = $(".js-hs-height").width();
        if ( $(".check-media").width() == 768 ) {
            $(".hs-height-i").css("height",hs_width);
        }
        else {
            $(".hs-height-i").css("height","");
        }
    }
    
    
/* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */

    var selector = 0;
    var portfolio_grid = $(".items");

    function fun_Portfolio() {
        
        var itemsGrid = 1;
        if ( $(".check-media").width() > 768 ) {
            itemsGrid = 2;
        }
        if ( $(".check-media").width() > 992 ) {
            if (portfolio_grid.hasClass("grid-3")) {
                itemsGrid = 3;
            }
            if (portfolio_grid.hasClass("grid-4")) {
                itemsGrid = 4;
            }          
        }
        if ( $(".check-media").width() > 1200 && portfolio_grid.hasClass("p-des")) {
            itemsGrid = 3;       
        }
        if ( $(".check-media").width() > 1580 && portfolio_grid.hasClass("p-des")) {
            itemsGrid = 4;       
        }

        var colWidth = Math.floor( $(".items-sizer").width() / itemsGrid );
       
        portfolio_grid.css({
            width: colWidth * itemsGrid
        })     
        
        $(".js-pd-height").each(function() {
            var pd_width = $(".js-pd-height").height()+240;
            var pd_width_lg = $(".js-pd-height-lg").height();
            if ( $(".check-media").width() <= 1200 ) {
                $(".pd-height").css("height",pd_width);
            }
            else {
                $(".pd-height").css("height",pd_width_lg);
            }
        })    

        var isotope_mode;
        if (portfolio_grid.hasClass("masonry")) {
            isotope_mode = "masonry";
        } else {
            isotope_mode = "fitRows"
        }

        portfolio_grid.isotope({
            itemSelector: '.item',
            layoutMode: isotope_mode,
            masonry: {
                columnWidth: colWidth
            },
            filter: selector
        });

        $('.filters ul a').click(function () {
            var selector = $(this).attr('data-filter');
            portfolio_grid.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        var $optionSets = $('.filters ul'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.click(function () {
            var $this = $(this);
            // don't proceed if already selected
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents('.filters ul');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
        });

    }   
    

    function js_modules() {
        $(".modules-project").each(function() {
            
            var moduleGrid;
            if ( $(".check-media").width() > 992 ) {
                moduleGrid = 3;
            } else {
                moduleGrid = 1;
            }
            var moduleWidth = Math.floor( $(".modules-sizer").width() / moduleGrid );
            var modulesWidth = moduleWidth * moduleGrid;
            
            $(".modules-project").css({
                width: modulesWidth
            }) 
            
            var mh = moduleWidth*2/3;
            var mk = moduleWidth;
            $(".mw1.mh1").css("height",mh);
            $(".mw1.mh2").css("height",mh*2);
            $(".m3").css("height",modulesWidth/2);
            $(".mk").css("height",mk);
            if ( $(".check-media").width() > 992 ) {
                $(".mw2.mh1").css("height",mh);
                $(".mw2.mh2").css("height",mh*2);           
            }
            else {
                $(".mw2.mh1").css("height",mh/2);
                $(".mw2.mh2").css("height",mh);
            }
            
            $('.modules-project').isotope({
                itemSelector: '.module',
                masonry: {
                    columnWidth: moduleWidth
                }
            })
            
        });
    }

    
/* --------------------------------------------------
Counter
---------------------------------------------------- */

    $(window).load(function () {

        $('.counter-yes').counterUp({
            delay: 10,
            time: 2000
        });

    }); 
    
    
/* --------------------------------------------------
Loading 2 characters in text post
---------------------------------------------------- */
    
    $(document).ready(function(){ 

        $(".js_load_post_text").each(function() {
            var download_text = "Te";
            $(this).find(".download-text").each(function() {
                download_text = $(this).text().substr(0, 2);
            });
            $(this).find(".post-block-text").each(function() {
                $(this).html(download_text);
            });
        });

    });  
    
    
/* ---------------------------------------------
 MegaMenu
 --------------------------------------------- */  
    
    $(".navbar-toggle").click(function() {
        $(".navbar-collapse").css("max-height",$(window).height()-60); 
    });
    
    $(document).ready(function() {
        $('.dropdown-toggle').dropdownHover().dropdown();
    });


/* --------------------------------------------------
Back to top
---------------------------------------------------- */

    $(document).ready(function(){

        if ($('.back-to-top').length) {
            var scrollTrigger = 500, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.back-to-top').addClass('display');
                    } else {
                        $('.back-to-top').removeClass('display');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('.back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }

    });   
    
    
/* --------------------------------------------------
Team Carousel Options
---------------------------------------------------- */

    $(document).ready(function () {
        
        $(".team-cl").owlCarousel({
            theme: "owl-team",
            navigation: true,
            pagination: false,
            navigationText: ["&#xf177;", "&#xf178;"],
            rewindSpeed: 500,
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsMobile: [545, 1]
        });
        
        $(".team-cl-3").owlCarousel({
            theme: "owl-team",
            navigation: true,
            pagination: false,
            navigationText: ["&#xf177;", "&#xf178;"],
            rewindSpeed: 500,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsMobile: [545, 1]
        });       

        $(".client-cl").owlCarousel({
            navigation: false,
            pagination: false,
            autoPlay: 3000, //Set AutoPlay to 3 seconds 
            rewindSpeed: 500,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 2],
            itemsMobile: [399, 1]
        });
        
        $(".testimonial-cl").owlCarousel({
            navigation: false,
            pagination: true,
            autoPlay: 14000, //Set AutoPlay to 5 seconds 
            paginationSpeed: 500,
            rewindSpeed: 800,
            singleItem: true
        }); 

    });    
      
    
/*--------------------------------------------------
Gallery MagnificPopup Options
----------------------------------------------------*/
    
    $(document).ready(function() {
        
        $('.mp').magnificPopup();
        
        $('.mp-gallery-1').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('.mp-gallery-2').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('.mp-gallery-3').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('.mp-gallery-4').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('.mp-gallery-5').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('.mp-gallery-6').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });

    });
    
    
/* --------------------------------------------------
Twitter
---------------------------------------------------- */
    
    $(document).ready(function(){

        $('#tweet').twittie({
            dateFormat: '%d %B %Y',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 2,
            loadingText: 'Loading!'
        });

    });

    
/* --------------------------------------------------
Instagram
---------------------------------------------------- */   

    $(document).ready(function () {

        jQuery.fn.spectragram.accessData = {
            accessToken: '3745624961.deac31e.8a4efe4f98a24b4da73cc7d5747ff88e',
            clientID: 'deac31eee1444d1080ec065efac5d610'
        };

        $('#insta').spectragram('getUserFeed', {
            query: 'uroktheme', //this gets uroktheme's photo feed
            size: 'medium',
            max: 9
        });

    });
    
    
/* --------------------------------------------------
Fluid Width Video Embeds
---------------------------------------------------- */

    $(document).ready(function(){

        // Target your .container, .wrapper, .post, etc.
        $(".video-wrapper").fitVids();

    });
    
    
/* --------------------------------------------------
Youtube Video Background
---------------------------------------------------- */

    $(function(){

        if ($("html").hasClass("no-mobile")) {
            $(".player").mb_YTPlayer();
        }

    });
    
    
/* --------------------------------------------------
Vimeo Video Background Options
---------------------------------------------------- */

    $(document).ready(function() {
        var options = {
            videoId: '175695804',
            parameters: {
                background: 0,
                autopause: 1,
                autoplay: 1,
                badge: 0,
                byline: 0,
                color: '000',
                loop: 1,
                player_id: 'vimeo1',
                portrait: 0,
                title: 0
            }
        };
        if ($("html").hasClass("no-mobile")) {
            $('#videoVimeo').vimelar(options);
        }
    });
    
    $(document).ready(function() {
        var options = {
            videoId: '67868895',
            parameters: {
                background: 1,
                autopause: 1,
                autoplay: 1,
                badge: 0,
                byline: 0,
                color: '000',
                loop: 1,
                player_id: 'vimeo2',
                portrait: 0,
                title: 0
            }
        };
        if ($("html").hasClass("no-mobile")) {
            $('#videoVimeo2').vimelar(options);
        }
    });
    
    
/* --------------------------------------------------
Local Video Background Options
---------------------------------------------------- */

    $(document).ready(function () {
        $('#videoLocal').vide('video/video', {
            autoplay: true,
            loop: true,
            muted: true
        });
    }); 
      
    
/* --------------------------------------------------
Parallax
---------------------------------------------------- */

    function parallaxon(){

        if ($("html").hasClass("no-mobile")) {
            $(".parallax").parallax("50%", 0.4);
            $(".parallax2").parallax("50%", 0.4);
            $(".parallax3").parallax("50%", 0.4);
            $(".parallax4").parallax("50%", 0.4);
            $(".parallax5").parallax("50%", 0.4);
            $(".parallax6").parallax("50%", 0.4);
            $(".parallax").css("background-attachment", "fixed");
            $(".parallax2").css("background-attachment", "fixed");
            $(".parallax3").css("background-attachment", "fixed");
            $(".parallax4").css("background-attachment", "fixed");
            $(".parallax5").css("background-attachment", "fixed");
            $(".parallax6").css("background-attachment", "fixed");
        }

    }
    
    
/*--------------------------------------------------
Swiper Slider Options
----------------------------------------------------*/

    $(window).load(function () {

        var swiper = new Swiper('.swiper-1', {
            nextButton: '.swiper-1-nb',
            prevButton: '.swiper-1-pb',
            pagination: '.swiper-1-pag',
            paginationType: 'fraction',
            effect: 'slide',
            grabCursor: 'true',
            keyboardControl: false,
            loop: 'true'
        });
        
        var swiper = new Swiper('.swiper-2', {
            nextButton: '.swiper-2-nb',
            prevButton: '.swiper-2-pb',
            pagination: '.swiper-2-pag',
            paginationType: 'fraction',
            effect: 'slide',
            grabCursor: 'true',
            keyboardControl: false,
            loop: 'true'
        });
        
        var swiper = new Swiper('.swiper-3', {
            nextButton: '.swiper-3-nb',
            prevButton: '.swiper-3-pb',
            pagination: '.swiper-3-pag',
            paginationType: 'fraction',
            effect: 'slide',
            grabCursor: 'true',
            keyboardControl: false,
            loop: 'true'
        });
        
        var swiper = new Swiper('.swiper-4', {
            nextButton: '.swiper-4-nb',
            prevButton: '.swiper-4-pb',
            pagination: '.swiper-4-pag',
            paginationType: 'fraction',
            effect: 'slide',
            grabCursor: 'true',
            keyboardControl: false,
            loop: 'true'
        });
        
        var swiper = new Swiper('.swiper-5', {
            nextButton: '.swiper-5-nb',
            prevButton: '.swiper-5-pb',
            pagination: '.swiper-5-pag',
            paginationType: 'fraction',
            effect: 'slide',
            grabCursor: 'true',
            keyboardControl: false,
            loop: 'true'
        });
        
        var swiper = new Swiper('.swiper-6', {
            nextButton: '.swiper-6-nb',
            prevButton: '.swiper-6-pb',
            pagination: '.swiper-6-pag',
            paginationType: 'fraction',
            effect: 'slide',
            grabCursor: 'true',
            keyboardControl: false,
            loop: 'true'
        });
        
        var swiper = new Swiper('.swiper-ap-1', {
            nextButton: '.swiper-ap-1-nb',
            prevButton: '.swiper-ap-1-pb',
            pagination: '.swiper-ap-1-pag',
            paginationType: 'fraction',
            effect: 'slide',
            grabCursor: 'true',
            keyboardControl: false,
            loop: 'true',
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            fade: {
                crossFade: false
            }
        });
        
        var swiper = new Swiper('.swiper-fade-1', {
            nextButton: '.swiper-fade-1-nb',
            prevButton: '.swiper-fade-1-pb',
            pagination: '.swiper-fade-1-pag',
            paginationType: 'fraction',
            effect: 'fade',
            speed: 2000,
            keyboardControl: false,
            loop: 'true',
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            fade: {
                crossFade: false
            }
        });       
        
        var swiper = new Swiper('.swiper-vertical-1', {
            nextButton: '.swiper-vertical-1-nb',
            prevButton: '.swiper-vertical-1-pb',
            pagination: '.swiper-vertical-1-pag',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            paginationType: 'fraction',
            loop: 'true'
        });
        
        var swiper = new Swiper('.swiper-vertical-ap-1', {
            nextButton: '.swiper-vertical-ap-1-nb',
            prevButton: '.swiper-vertical-ap-1-pb',
            pagination: '.swiper-vertical-ap-1-pag',
            direction: 'vertical',
            slidesPerView: 1,
            autoplay: 5000,
            paginationClickable: true,
            paginationType: 'fraction',
            loop: 'true'
        });

    });   
    
    
/*--------------------------------------------------
Skills Progress Bar
----------------------------------------------------*/

    $(window).load(function () {

        $('.progress-items').waypoint(function() {
            $(".progress-bar").each(function () {
                var each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width + '%');
            });     
        }, {
            offset: '90%',
        });

    });    
    
    
/*--------------------------------------------------
Typing Animation
----------------------------------------------------*/
    
    /* animated blinking cursor */
    $(function(){
        $("#typed").typed({
            stringsElement: $("#typed-strings"),
            typeSpeed: 30,
            backDelay: 500,
            loop: true
        });
    });


})(jQuery); // End of use strict