$(document).ready(function() {

    $('#side-menu-links').css('display', 'none');

$('#side-menu-img').on('click', function() {
    var submenu = $(this).parent().find("#side-menu-links");
    submenu.fadeIn(300);

    $("#side-menu-links").on('mouseleave', function() {
      submenu.fadeOut(300);
    });

  });

})

/* ///VANILLA JAVASCRIPT/// 
const sideMenubtn = document.getElementById('side-menu-img');
const sideMenu = document.getElementById('side-menu-links');

sideMenu.style.display = "none";

sideMenubtn.addEventListener('click', function () {   
    if (sideMenu.style.display === "none") {
        sideMenu.style.display = "flex";
    } else if (sideMenu.style.display === "flex") {
        sideMenu.style.display = "none";
    } else
        return console.log('The menu is no longer working')
}); */