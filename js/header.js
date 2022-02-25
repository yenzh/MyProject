"use strict";

$(document).ready(function () {

  // ====== 電腦版導覽列scroll變色 ===== //
  $(window).on("scroll", function () {
    var wn = $(window).scrollTop();
    if (wn > 0) {
      $(".title").css("background", "rgba(189,166,140,0.85)");
    } else {
      $(".title").css("background", "rgba(189,166,140)");
    }
  });

  // ====== 電腦版下拉選單click ===== //
  $('.menu').on('click', function(){
    // e.preventDefault();
    $('.menu').toggleClass('-on');
    
    $('.fa-chevron-down').toggleClass("-on");
    $('.fa-chevron-up').toggleClass("-on");
  });

  $('.fa-chevron-down').on('foucs', function(){
    $('.menu').toggleClass('-on');
  });

  // ====== 手機板導覽列scroll變色 ===== //
  $(window).on("scroll", function () {
    var wn = $(window).scrollTop();
    if (wn > 0) {
      $(".title1").css("background", "rgba(189,166,140,0.85)");
    } else {
      $(".title1").css("background", "rgba(189,166,140)");
    }
  });

  // ===== 漢堡選單樣式變化 ===== //
  $("button.hamburger").on("click", function(){
    $("button.hamburger").toggleClass("is-active");
  });

  //===== 漢堡選單變化 下拉選單出現 =====//
  $("button.hamburger").on("click", function () {

    $(this).toggleClass("-on");
    $("ul.menu1").toggleClass("-on");
  });

  // ===== 下拉選單 > 內部選單click ===== //
  $('.menu_1').on('click', function(){
    // e.preventDefault();
    $('.menu_1').toggleClass('-menu');
    $('.fa-chevron-down').toggleClass("-on");
    $('.fa-chevron-up').toggleClass("-on");
  });

});


