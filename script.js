/* JavaScript Code */

// Smooth Scrolling
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 70
        }, 1000);
      }
    });
});

// Burger Menu
$('.burger').click(function() {
    $('.nav-links').toggleClass('nav-active');
    $('.burger').toggleClass('toggle');
  });
    
// Custom Cursor
    $(window).mousemove(function(e) {
    $('.cursor').css({
    top: e.clientY + 'px',
    left: e.clientX + 'px'
  });
});
    
// Project Overlay Effect
  $('.project-overlay').each(function() {
  $(this).hover(function() {
  $(this).find('h3, p').css({
  transform: 'translateY(0)',
  opacity: 1
  });
  }, function() {
  $(this).find('h3, p').css({
  transform: 'translateY(20px)',
  opacity: 0
    });
  });
});