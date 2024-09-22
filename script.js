document.getElementById('menu_btn').addEventListener('click', function responed() {
      var dropDownMenu = document.querySelector('.dropDown_menu');
      dropDownMenu.classList.toggle('open');


    });


    function checkimagesrc() {
      if (document.getElementById('menu_btn').getAttribute('src') == 'images\\menu.png' ) {
        document.getElementById('menu_btn').src = 'images\\close.png';
      }
      else {
        document.getElementById('menu_btn').src = 'images\\menu.png';
      }
    }
