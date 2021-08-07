(function ($) {
    'use strict';
    $(window).on('load',function(){

        //==========preloder===========
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

        // ===========portfolio isotop data filter===========
        $('.portfolio-grid').imagesLoaded( function() {
            var Container = $('#portfolio-area');
            
            $('.controls').on( 'click', '.port-btn', function() {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $('.items').isotope({ filter: filterValue });
            });
            $('.items').isotope({
                itemSelector: '.single-item',
                percentPosition: true
            });
        })
    });


    //==========fixed header & scroll to top button===========
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300) {
            $('.header .bottom-header, .header-2').addClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeIn();
            $('.scroll-to-top button').addClass('active');
        } else {
            $('.header .bottom-header, .header-2').removeClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeOut();
            $('.scroll-to-top button').removeClass('active');
        }
    });
    $(document).ready(function(){
        // ===========scroll to top function===========
        $(".scroll-to-top").on('click', function(){
            $('html, body').animate({scrollTop : 0},100);
        })

        // ===========search option view on lg(large) monitor===========
        $(".nav-form").on('click', function(event) {
            $(".nav-form").addClass("active");
            event.stopPropagation();
        });
        $(document).on('click', function(event){
            if (!$(event.target).hasClass('active')) {
                $(".nav-form").removeClass("active");
            }
        });
        
        //==========modal video popup===========
        $(".vdo-btn").modalVideo();

        // ==========odometer==========
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });

        // ==========nice select===========
        $('.select').niceSelect();

        // ==========s portfolio slider===========
        $('.portfolio-slider').owlCarousel({
            items: 3,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1.5,
                    center: true
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2,
                },
                1650: {
                    items: 3
                }
            }
        });
        
        // ==========testimonial slider===========
        $('.comment-area').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            nav: true,
            navText: ['<i class="far fa-arrow-left"></i>','<i class="far fa-arrow-right"></i>'],
        });
        
        // ==========testimonial slider two===========
        $('.comment-area-2').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1640: {
                    items: 3
                }
            }
        });
        
        // ==========testimonial slider two===========
        $('.team-slider').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1640: {
                    items: 3
                }
            }
        });

        // ==========brands slider===========
        $('.brands').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                960: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });

        // ==========progresscircle intialize===========
        $('.single-skill').circlechart();
        
        // ===========faq section collapse===========
        $('.collapse').on('shown.bs.collapse', function(){
            $(this).parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
        }).on('hidden.bs.collapse', function(){
            $(this).parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
        })
    });
}(jQuery));