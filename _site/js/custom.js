$(document).ready(function(){
     console.log("ready");
     $('.custom-menu-link').bind('click', function(event){
          console.log("menu link clicked");
          var menu = document.getElementById("menu");
          menu.setAttribute("class", "custom-wrapper pure-g");
          var toggle = document.getElementById("toggle");
          toggle.setAttribute("class", "custom-toggle menu-link");
          var menu_horizontal = document.getElementById("menu-horizontal");
          menu_horizontal.setAttribute("class", "pure-menu pure-menu-horizontal custom-can-transform custom-menu")
     });
});
