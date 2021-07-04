window.$ = jQuery;

var Carousel = function($element) {

  var left = 0,
    right = 0,
    owl,
    $cursor = $('<div class="cursor"><div class="cursor__icon"></div></div>'),
    $window = $(window),
    selectors = {
      hideCursor: 'a, button, .owl-page'
    },
    cursorWidth = 32,
    cursorHeight = 32

  var init = function() {
    _initLayout();
    _initEvents();
    _initCarousel();
    _initCursor();
  };

  var _initLayout = function() {
    left = 0;
    right = $element.width() / 2;
  };

  var _initEvents = function() {
    $element
      .on('mousemove', _mousemove)
        .on('click', _click);
  };

  var _initCarousel = function() {
    owl = $(".owl-carousel").owlCarousel({
        singleItem : true,
    });
  };

  var _initCursor = function() {
    $element.append($cursor);

    $element
      .on('mouseenter', _cursorShow)
        .on('mouseleave', _cursorHide);

    $(selectors.hideCursor)
      .on('mouseenter', _cursorHide)
        .on('mouseleave', _cursorShow);
  };

  var _mousemove = function(e) {

    var x = e.pageX - cursorWidth - 10,
        y = e.pageY - $window.scrollTop() - (cursorHeight * 2) - 3,
        translateString = 'translate(' + x + 'px,' + y + 'px)';

    if (e.pageX > right) {
      $element
        .removeClass('left')
        .addClass('right')
    } else {
      $element
        .removeClass('right')
        .addClass('left')
    }

    $cursor.css({
      'transform': translateString,
      '-webkit-transform': translateString,
      '-moz-transform': translateString,
      '-o-transform': translateString
    });


  };

  var _click = function(e) {
    if (e.target.nodeName === 'A') {
      e.preventDefault();
      alert('CTA');
    } else if (!$(e.target).hasClass('owl-page')) {
      if ($element.hasClass('left')) {
        owl.trigger('owl.prev');
      } else {
        owl.trigger('owl.next');
      }
    }
  }

  var _cursorHide = function() {
    $cursor.removeClass('js--visible')
  };

  var _cursorShow = function() {
    $cursor.addClass('js--visible')
  };

  init();

  return {
    init: init
  };
};

$(document).ready(function() {

  var carousel = new Carousel($('.carousel'));

});

<script type="text/javascript">
<!--
if (screen.width <= 699) {
document.location = "https://mvmarkey.cargo.site/";
}
//-->
</script>
