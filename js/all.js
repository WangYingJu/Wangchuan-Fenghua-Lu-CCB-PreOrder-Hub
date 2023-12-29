$(function () {
  // 顯示gotop
  $(".anchor").hide(); // 20230210 新增
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50) {
      $(".anchor").fadeIn(300);
    } else {
      $(".anchor").fadeOut(300);
    }
  });

  // note顯示down箭頭
  // $(".down").hide();
  $(".note").on("scroll", function (e) {
    e.preventDefault();
    if ($(".note").scrollTop() >= 50) {
      $(".down").fadeOut(300);
    } else {
      $(".down").fadeIn(300);
    }
  });

  // right nav
  // go top
  // 向上捲動
  $(".goTop").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".goOrder").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section1").offset().top }, 1000);
  });

  // 展開收合前往fb
  $(document).ready(function () {
    $(".fb-arrow").click(function () {
      event.preventDefault();
      $(this).toggleClass("fb-arrow_active");
      if ($(this).hasClass("fb-arrow_active")) {
        $(".fb_anchor").css("width", "171px");
        $(this)
          .parent()
          .find(".fb-miao")
          .animate({ opacity: 1, width: 146 }, 300);
      } else {
        $(".fb_anchor").css("width", "25px");
        $(this)
          .parent()
          .find(".fb-miao")
          .animate({ opacity: 0, width: 0 }, 300);
      }
    });
  });

  // audio 音樂播放器
  $("#audio_btn").click(function (e) {
    e.preventDefault();
    var music = document.getElementById("music");
    if (music.paused) {
      music.play();
      $("#music_btn").attr("src", "./image/audio_on.png");
    } else {
      music.pause();
      $("#music_btn").attr("src", "./image/audio_off.png");
    }
  });
});
