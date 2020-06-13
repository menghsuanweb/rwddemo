// 測試一js有沒有作用‣‣‣ console.log("test123456");
// scroll to id
$("#mymenu a, a#backtop").click(function () {
  let who = $(this).attr("href"); //目標名稱
  let val = $(who).offset().top - $("#mymenu").innerHeight() + 1; //抓定位點值
  $("html").animate( //做動畫效果
    { scrollTop: val }, 1000, "swing"
  );
});

spy(); // scroll spy 確保第一次執行時 讓畫面的active在正確的呈現
bgmenu(); //check menu bg

//scroll spy 每次滑鼠滾動時即觸發兩函式
$(window).scroll(() => {
  spy(); // scroll spy
  bgmenu(); //check menu bg
});
//每次螢幕寬度變化時 觸發此函式
$(window).resize(() => {
  bgmenu(); //check menu bg
});


function spy() {
  let nowat = $(window).scrollTop();
  $('section').each(function () {
    let
      id = $(this).attr('id'),
      offset = $(this).offset().top - $("#mymenu").innerHeight(),
      height = $(this).innerHeight();

    if (offset <= nowat && nowat < offset + height) {
      $("#mymenu a").removeClass('active');//移除 class 名稱
      $(`#mymenu a[href='#${id}']`).addClass('active');//增加 class 名稱
    };
  });
}
// 處理BG Menu
function bgmenu() {
  /* 控制 Header's Navbar 的 bg-dark 因 scroll 而變動。*/
  let
    totalw = $(window).innerWidth(),
    nowat = $(window).scrollTop(),
    offset = $("#mymenu").innerHeight() + 1,
    height = $("#myslider").innerHeight();
  if (nowat <= height - offset) { //slider 內
    if (totalw >= 991) $("#mymenu").removeClass("bg-dark");
    else $("#mymenu").addClass("bg-dark");
    $("#backtop").removeClass("shown");
  }
  else { //已脫離
    if (totalw >= 991) $("#mymenu").addClass("bg-dark");
    $("#backtop").addClass("shown");
  }
}
