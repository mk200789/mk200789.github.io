$(document).ready(function(){
     console.log("ready");
     loadTags();

     $('.custom-menu-link').bind('click', function(event){
          console.log("menu link clicked");
          var menu = document.getElementById("menu");
          menu.setAttribute("class", "custom-wrapper pure-g");
          var toggle = document.getElementById("toggle");
          toggle.setAttribute("class", "custom-toggle menu-link");
          var menu_horizontal = document.getElementById("menu-horizontal");
          menu_horizontal.setAttribute("class", "pure-menu pure-menu-horizontal custom-can-transform custom-menu")
     });

     function loadTags(){
          var tags = document.getElementsByClassName("tag");

          for (var i=0; i<tags.length; i++){
               colorTag(tags[i].innerHTML.trim().toLowerCase(), tags[i].style);
          }
     }

     function colorTag(tag, tagStyle){
          switch(tag){
               case 'core data':
                    tagStyle.backgroundColor='#33bfc7';
                    break;
               case 'swift':
                    tagStyle.backgroundColor='#e6d928';
                    break;
               case 'javascript':
               case 'html5':
               case 'aws':
               case 'responsive':
                    tagStyle.backgroundColor='#dade26';
                    break;
               case 'python':
               case 'django':
                    tagStyle.backgroundColor='#dc8b8b';
                    break;
               case 'game':
               case 'compiler':
               case 'mobile':
               case 'alexa':
               case 'quiz':
                    tagStyle.backgroundColor='#ac72af';
                    break;
               default:
                    tagStyle.backgroundColor='#8787a9';

          }
     }


     $('.type-it').typeIt({
         speed: 70,
         lifeLike: false,
         autoStart: false
       })
});
