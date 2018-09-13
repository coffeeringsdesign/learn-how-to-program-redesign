$(document).ready(function() {

  // Left nav dropdown functions start //
  function closeAllSubMenus() {
    $(".submenu").each(function() {
      $(this).slideUp();
    })
  }

  $("#getting-started-epicodus-toplink").click(function() {
    closeAllSubMenus();
    $("#submenu-0").slideDown();
  });

  $("#getting-started-intro-toplink").click(function() {
    closeAllSubMenus();
    $("#submenu-1").slideDown();
  });

  $("#getting-started-javascript-toplink").click(function() {
    closeAllSubMenus();
    $("#submenu-1").slideDown();
  });

  $("#git-html-css-toplink").click(function() {
    closeAllSubMenus();
    $("#submenu-2").slideDown();
  });

  $("#javascript-with-webpack-toplink").click(function() {
    closeAllSubMenus();
    $("#submenu-2").slideDown();
  });

  $("#test-driven-development-toplink").click(function() {
    closeAllSubMenus();
    $("#submenu-3").slideDown();
  });
  // Left nav dropdown functions end //

  // Top dropdown buttons //

  // $("#intro-container").click(function() {
  //   $("#intro-dropdown").slideToggle();
  // });

  // Top dropdown buttons end //

  // Buttons to bring up video and cheat sheet overlays. //
  $("#video-button").click(function() {
    $(".overlay").show();
    $(".video").show();
  });

  $("#cheat-sheet-button").click(function() {
    $(".overlay").show();
    $(".cheat-sheet").show();
  })

  $(".close-overlay").click(function() {
    $(".overlay").hide();
    $(".video").hide();
    $(".cheat-sheet").hide();
  })
})
