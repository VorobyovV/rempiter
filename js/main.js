$(document).ready(function() {
  
    $(function () {
        $(".number-mask").mask("+7 (999) 999 - 99 - 99");
      });
    
      $('.staff__blocks').slick({
        slidesToShow: 4,
        infinite: false,

        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1.5,
            },
          },
        ],
      })

      $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 450) {
          $('.header').addClass('show')
        } else {
          $('.header').removeClass('show')
        }
        if (sc > 300) {
          $('.header').addClass('dop')
        } else {
          $('.header').removeClass('dop')
        }
      })

      $('.header__nav li a').click(function () {
        $('.header__nav').removeClass('active')
        $('.burger a').removeClass('active')
        $('body').removeClass('fixed')
      })

      $(document).on('click', function (e) {
        if (!$(e.target).closest('.burger, .header__nav').length) {
          $('.header__nav').removeClass('active')
          $('body').removeClass('fixed')
          $('.burger a').removeClass('active')
        }
        e.stopPropagation()
      })

      $(".header__nav li a").on("click", function () {
        var $el = $(this),
          id = $el.attr("href");
        $("html, body").animate(
          {
            scrollTop: $(id).offset().top - 85,
          },
          500
        );
        return false;
      });
     

      $('.burger').click(function () {
        $(this).children().toggleClass('active')
        $('.header__nav').toggleClass('active')
        $('body').toggleClass('fixed')
        return false
      })


      $('.faq__header').click(function () {
        if ($(this).hasClass('active')) {
          $(this).toggleClass('active')
          $(this).removeClass('active')
          $(this).next().slideUp(300)
        } else {
          $('.faq__header').removeClass('active')
          $('.faq__body').slideUp(300)
          $(this).toggleClass('active')
          $(this).next().slideToggle(300)
        }
      })

      function responsive_slider(selector, size, options) {
        if ($(window).width() < size) {
          if (!$(selector).hasClass('slick-slider')) {
            $(selector).slick(options)
          }
        } else {
          if ($(selector).hasClass('slick-slider')) {
            $(selector).slick('destroy')
          }
        }
      }
    
      responsive_slider('.reviews__blocks', 991, {
        slidesToShow: 2,
        arrows: false,
        infinite: true,
        autoplay: true,
    autoplaySpeed: 1800,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      })
    
      $(window).resize(function () {
        responsive_slider('.reviews__blocks', 991, {
          slidesToShow: 2,
          arrows: false,
          infinite: true,
          autoplay: true,
    autoplaySpeed: 1800,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        })
      })


      var swiper = new Swiper(".gallery-thumbs", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
       
        breakpoints: {
          320: {
            spaceBetween: 10,
            allowTouchMove: true,
            
          },
          767: {
            spaceBetween: 20,
            
          },

        },
      });
    
      var swiperGallery = new Swiper(".gallery", {
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper,
        },
        breakpoints: {
          320: {
            
            allowTouchMove: true,
            
          },
          767: {
            allowTouchMove: false,
          },

        },
      });


      var swiper2 = new Swiper(".gallery-thumbs-second", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
       
        breakpoints: {
          320: {
            spaceBetween: 10,
            allowTouchMove: true,
            
          },
          767: {
            spaceBetween: 20,
            
          },

        },
      });
    
      var swiperGallery2 = new Swiper(".gallery-second", {
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper2,
        },
        breakpoints: {
          320: {
            
            allowTouchMove: true,
            
          },
          767: {
            allowTouchMove: false,
          },

        },
      });



      var swiper3 = new Swiper(".gallery-thumbs-third", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
       
        breakpoints: {
          320: {
            spaceBetween: 10,
            allowTouchMove: true,
            
          },
          767: {
            spaceBetween: 20,
            
          },

        },
      });
    
      var swiperGallery3 = new Swiper(".gallery-third", {
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper3,
        },
        breakpoints: {
          320: {
            
            allowTouchMove: true,
            
          },
          767: {
            allowTouchMove: false,
          },

        },
      });


      var swiper4 = new Swiper(".gallery-thumbs-four", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
       
        breakpoints: {
          320: {
            spaceBetween: 10,
            allowTouchMove: true,
            
          },
          767: {
            spaceBetween: 20,
            
          },

        },
      });
    
      var swiperGallery4 = new Swiper(".gallery-four", {
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper4,
        },
        breakpoints: {
          320: {
            
            allowTouchMove: true,
            
          },
          767: {
            allowTouchMove: false,
          },

        },
      });

      var swiper5 = new Swiper(".gallery-thumbs-five", {
        spaceBetween: 20,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
       
        breakpoints: {
          320: {
            spaceBetween: 10,
            allowTouchMove: true,
            
          },
          767: {
            spaceBetween: 20,
            
          },

        },
      });
    
      var swiperGallery5 = new Swiper(".gallery-five", {
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper5,
        },
        breakpoints: {
          320: {
            
            allowTouchMove: true,
            
          },
          767: {
            allowTouchMove: false,
          },

        },
      });


      var swiper6 = new Swiper(".gallery-thumbs-six", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
       
        breakpoints: {
          320: {
            spaceBetween: 10,
            allowTouchMove: true,
            
          },
          767: {
            spaceBetween: 20,
            
          },

        },
      });
    
      var swiperGallery6 = new Swiper(".gallery-six", {
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper6,
        },
        breakpoints: {
          320: {
            
            allowTouchMove: true,
            
          },
          767: {
            allowTouchMove: false,
          },

        },
      });
});





