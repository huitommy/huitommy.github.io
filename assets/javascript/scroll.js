$(document).ready(function(){
  $('nav a').not("#exclude").click(function () {
    var $href = $(this).attr('href');
    $('body').stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
    return false;
  });
  $(document).scroll(function () {
    var scrollPos = $(document).scrollTop() + 700;
    $('nav a').not("#exclude").each(function () {
      var currentPosition = $(this);
      var reference = $(currentPosition.attr("href"));
      if (reference.position().top <= scrollPos && reference.position().top + reference.height() > scrollPos) {
        $('nav a').not("#exclude").removeClass("active");
        currentPosition.addClass("active");
      }
    });
  });
});
