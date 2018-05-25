$(document).ready(function() {
  var link = $(".menu-link"),
      link_active = $(".menu-link__active"),
      menu = $(".menu"),
      nav_link = $(".menu a");

  link.click(function() {
    link.toggleClass("menu-link__active");
    menu.toggleClass("menu-active");
  });
  nav_link.click(function() {
    link.toggleClass("menu-link__active");
    menu.toggleClass("menu-active");
  });
});