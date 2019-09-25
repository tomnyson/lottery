(function($){
  "user strict";


  $(window).on('load', function(){
    // run test on initial page load
    checkSize();
    // run test on resize of the window
    $(window).resize(checkSize);

    //preloader
    $("#preloader").delay(300).animate({
      "opacity" : "0"
      }, 500, function() {
      $("#preloader").css("display","none");
    });
  });

  //js code for mobile menu 
  $(".menu-toggle").on("click", function() {
      $(this).toggleClass("is-active");
  });

  //Function to the css rule
  function checkSize(){
    if (window.matchMedia('(max-width: 991px)').matches) {
        // js code for responsive drop-down-menu-item with swing effect
        $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
          var element = $(this).parent("li");
          if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(500,"linear");
          }
          else {
            element.addClass("open");
            element.children("ul").slideDown();
            element.siblings("li").children("ul").slideUp();
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp();
          }
        });
      }
    }
  
  // menu options custom affix
  var fixed_top = $(".header-section");
  $(window).on("scroll", function(){
      if( $(window).scrollTop() > 50){  
          fixed_top.addClass("animated fadeInDown menu-fixed");
      }
      else{
          fixed_top.removeClass("animated fadeInDown menu-fixed");
      }
  });

  $(".parallax-container").on('mousemove',function(e) {
    parallaxIt(e, ".slide1", -90);
    parallaxIt(e, ".slide2", -50);
    parallaxIt(e, ".slide3", -110);
    parallaxIt(e, ".slide4", -65);
    parallaxIt(e, ".slide5", -120);
    parallaxIt(e, ".slide6", -80);
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $(".parallax-container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

  // countdown plungin init
  $('#clock').countdown('2019/6/10', function(event) {
    $(this).html(event.strftime(''
      +'<div><span>%D</span><p>days</p></div>'
      +'<div><span>%H</span><p>hrs</p></div>'
      +'<div><span>%M</span><p>mins</p></div>'
      +'<div><span>%S</span><p>sec</p></div>'));
  });

  // countdown plungin init
  $('.clock').countdown('2019/6/10', function(event) {
    $(this).html(event.strftime(''
      +'<div><span>%D</span><p>days</p></div>'
      +'<div><span>%H</span><p>hrs</p></div>'
      +'<div><span>%M</span><p>mins</p></div>'
      +'<div><span>%S</span><p>sec</p></div>'));
  });
  

  // counter 
  $('.counter').countUp({
    'time': 1500,
    'delay': 10
  });

  $('.testimonial-content-slider-area').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-thumb-slider'
  });
  $('.testimonial-thumb-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testimonial-content-slider-area',
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 441,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(".meta-react").on('click', function(){
    $(this).toggleClass("active");
  });

  $('.brand-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".lottery-number-list li").on('click', function(){
    $(this).toggleClass("active");
  });

  // Show or hide the sticky footer button
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn(200);
    } else {
        $(".scroll-to-top").fadeOut(200);
    }
  });

  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300);
  });


})(jQuery);