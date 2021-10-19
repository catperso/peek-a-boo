$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
    $(".hide-image").toggle();
    $(".show-image").toggle();
  });
  $(".clickable-facts").click(function() {
    $(".walrus-facts").slideDown();
  });
});