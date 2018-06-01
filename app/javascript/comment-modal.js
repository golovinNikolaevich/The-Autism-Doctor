$(document).ready(function() {
  var open_comment = $(".open-modal"),
      modal = $(".comment-modal"),
     	modal_close = $(".modal-close");

  open_comment.click(function() {
    modal.toggleClass("open-modal");
  });
  modal_close.click(function() {
    modal.toggleClass("open-modal");
  });
});