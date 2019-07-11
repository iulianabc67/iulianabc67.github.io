var link1 = $(".nav_menu_link_drop_1");
var link2 = $(".nav_menu_link_drop_2");
var content1 = $('#content1');
var content2 = $('#content2');

$(link1).hover(
  function(){
    $(content1).slideDown(350);
  },
  function(){
    $(content1).slideUp(350);
  }
);