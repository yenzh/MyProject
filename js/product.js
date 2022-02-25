
$(document).ready(function () {
  $('.pr_img_left').click(function(){
    // console.log($(this));
    let img_left = $(this).attr('id');
    // console.log(img_left)

    $('.pr_img_change').removeClass('-on');
    $('.pr_img_change[data-id='+ img_left +']').addClass('-on');

  });
  
  
  
  
  
  let itemnum_el = document.getElementById("itemnum");
  document.getElementById("numAdd").addEventListener("click", addCount);
  document.getElementById("numSub").addEventListener("click", subCount);

  let count = 1;

  function addCount() {
    count += 1;
    showCount();
  }

  function subCount() {
    if (count > 1) {
      count -= 1;
    }
    showCount();
  }

  function showCount() {
    itemnum_el.value = count;
    if(parseInt(itemnum_el.value) > 10){
        alert("最多可購買數量 !");
        itemnum_el.value = 10;
    }
  }

  // ========== 商品介紹 ========= //
  // $('div.int1_t').mouseover(function(){
  //   $('div.int1_t > img.int_img').toggleClass("-on");
  // }); 




  // ======= 更多商品 ======= //  
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
});
