"use strict";

// ===== 首圖輪播 ======//
$(document).ready(function () {
  $(".banner1").slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
    //   prevArrow:"<button type='button' class='slick-prev slick-arrow'><img src='./imgages/index/next1.png' alt=''></button>"
  });
});

// ======== 最新, 熱門商品切換 ======== //

$("a.new").on("click", function () {
  // $(".new").css("background-color", "rgb(228, 206, 187)");
  $("#new").css("display", "block");
  $("#hot").css("display", "none");
  // $(".hot").toggleClass("-on");
});

$("a.hot").on("click", function () {
  // $(".hot").css("background-color", "rgb(228, 206, 187)");
  $("#new").css("display", "none");
  $("#hot").css("display", "block");
  $("#hot").css("display", "block");
});

// ========= 風格切換 ========= //
$("i.fa-chevron-left").on("click", function () {
  $(".style1").toggleClass("-on");
  $(".style2").toggleClass("-on");
});

$("i.fa-chevron-right").on("click", function () {
  $(".style1").toggleClass("-on");
  $(".style2").toggleClass("-on");
});

// ====== 更多商品 ======= //
// $('i.fa-angle-right').on('click', function(){
//   $('.commodity_more > ul').animate({
//     left: -510
//   })
// });

// $('i.fa-angle-left').on('click', function(){
//   $('.commodity_more > ul').animate({
//     left: 0
//   })
// });

// let divWidth = parseInt($("div.commodity_more").width());
// console.log(divWidth);
// let divWidth = parseInt($("div.commodity_more").width());
// let ulWidth = parseInt($("div.commodity_moreul").width());
// let liWidth = parseInt($("div.commodity_more>ul>li").width() + 40);
// console.log(divWidth);
// console.log(ulWidth);
// console.log(liWidth);

$("#next").click(function () {
  let divWidth = parseInt($("div.commodity_more").width());
  let ulWidth = parseInt($("div.commodity_moreul").width());
  let liWidth = parseInt($("div.commodity_more>ul>li").width() + 30);
  // console.log(ulWidth);

  let currentLeft = $("div.commodity_more > ul").css("left"); //String

  if (-parseInt(currentLeft) >= ulWidth - divWidth - liWidth * 2) {
    $("div.commodity_more > ul").css("left", "-1800px");
    $("div.commodity_more > ul").animate({
      left: -(ulWidth - divWidth),
    });
  } else {
    $("div.commodity_more > ul").animate({
      left: parseInt(currentLeft) - liWidth * 2,
    });
  }
});

$("#pre").click(function () {
  let divWidth = parseInt($("div.commodity_more").width());
  let liWidth = parseInt($("div.commodity_more>ul>li").width() + 30);
  let ulWidth = parseInt($("div.commodity_more>ul").width());

  let currentLeft = $("div.commodity_more > ul").css("left");

  if (-parseInt(currentLeft) <= liWidth * 3) {
    $("div.commodity_more > ul").animate({
      left: 0,
    });
  } else {
    $("div.commodity_more > ul").animate({
      left: parseInt(currentLeft) + liWidth * 3,
    });
  }
});
