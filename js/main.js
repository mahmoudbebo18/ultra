//form validation
$(document).ready(function () {
  console.log("dsfsfsfsd");
  var userEror = true,
    mailError = true,
    msgError = true;

  $(".navbar-nav .nav-link").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
    $("body, html").animate(
      {
        // scrollTop = divId.offset().top
        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          ($(".navbar").innerHeight() + 1),
      },
      400
    );
  });

  $('.footer-about').click(function () {
    $("body, html").animate(
      {
        // scrollTop = divId.offset().top
        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          ($(".navbar").innerHeight() + 1),
      },
      400
    );
  });

  $(".userName").blur(function () {
    if ($(this).val().length <= 3) {
      $(this).css("border", "1px solid #f00");

      $(this).parent().find(".my-alert").fadeIn(200);

      userEror = true;
    } else {
      $(this).css("border", "1px solid #080");

      $(this).parent().find(".my-alert").fadeOut(200);
      userEror = false;
    }
  });

  $(".myMail").blur(function () {
    if ($(this).val().length == "") {
      $(this).css("border", "1px solid #f00");

      $(this).parent().find(".my-alert").fadeIn(200);
      mailError = true;
    } else {
      $(this).css("border", "1px solid #080");

      $(this).parent().find(".my-alert").fadeOut(200);
      mailError = false;
    }
  });

  $(".myMsg").blur(function () {
    if ($(this).val().length < 10) {
      $(this).css("border", "1px solid #f00");

      $(this).parent().find(".my-alert").fadeIn(200);
      msgError = true;
    } else {
      $(this).css("border", "1px solid #080");

      $(this).parent().find(".my-alert").fadeOut(200);
      msgError = false;
    }
  });

  $(".myForm").submit(function (e) {
    if (userEror === true || mailError === true || msgError === true) {
      e.preventDefault();

      $(".myMsg , .myMail ,.userName ").blur();
    }
  });



});
