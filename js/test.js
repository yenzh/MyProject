//獲取外包容器
var eContainer = document.getElementById('bannerContainer');
//獲取圖片總容器
var eImgBox = eContainer.getElementsByClassName('img_box')[0];
//獲取圖片容器串列
var aImgList = eImgBox.getElementsByTagName('div');
//獲取選擇按鈕容器
var eSelBox = eContainer.getElementsByClassName('sel_box')[0];
//獲取選擇按鈕
var aSelList = eSelBox.getElementsByTagName('li');
//獲取左按鈕
var eLeftBtn = eContainer.getElementsByClassName('left_btn')[0];
//獲取右按鈕
var eRightBtn = eContainer.getElementsByClassName('right_btn')[0];
//當前圖片索引
var nIndex = 0;
//輪播圖自動切換定時器
var timer = null;


//獲取外包容器寬度
var nContainerW = eContainer.offsetWidth;
//設定圖片總容器寬度
eImgBox.style.width = nContainerW * aImgList.length + 'px'; 


//默認顯示第一張圖片
eImgBox.style.left = '0px';
//默認第一個選擇按鈕設為當前選擇按鈕
aSelList[0].className = 'cur';


function fnSwitchImg(){
    //修改輪播圖容器位置，用于切換圖片
    eImgBox.style.left = -nIndex * nContainerW + 'px';
    //洗掉所有選擇按鈕上的className
    for(let i=0;i<aSelList.length;i++){
      aSelList[i].className = '';
    }
    //修改當前選擇按鈕的className，設為當前選擇按鈕
    aSelList[nIndex].className = 'cur';
  }


//選擇按鈕系結事件
eSelBox.addEventListener('click',function(event){
    //獲取當前點擊元素
    var eTarget = event.target;
    //判斷點擊的是li元素，且不是當前選擇按鈕
    if(eTarget.nodeName.toLowerCase() == 'li' && eTarget.className != 'cur'){
      //設定當前圖片索引
      nIndex = eTarget.innerHTML-1
      fnSwitchImg();
    }
  });



  eLeftBtn.onclick = function(){
    if(nIndex<=0){
      return; //如果當前是第一張圖片，阻止后續代碼執行
    }
    //往左切換圖片
    nIndex --;
    fnSwitchImg();
  }
  eRightBtn.onclick = function(){
    if(nIndex>=aSelList.length-1){
      return; //如果當前是最后一張圖片，阻止后續代碼執行
    }
    //往右切換圖片
    nIndex ++;
    fnSwitchImg();
  }


  //輪播圖自動切換
  timer = setInterval(function(){
    //向右切換圖片
    nIndex ++;
    //已切換到最后一張圖片時，跳回第一張圖片
    if(nIndex>=5){
      nIndex = 0;
    }
    fnSwitchImg();
  },3000);

  //滑鼠滑入輪播圖停止自動切換
  eContainer.onmouseenter = function(){
    clearInterval(timer);
  }

  //滑鼠移出輪播圖開始自動切換
  eContainer.onmouseleave = function(){
    //輪播圖自動切換
    timer = setInterval(function(){
      //向右切換圖片
      nIndex ++;
      //已切換到最后一張圖片時，跳回第一張圖片
      if(nIndex>=5){
        nIndex = 0;
      }
      fnSwitchImg();
    },3000);
  }