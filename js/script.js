//スムーススクロール
$(function(){
  $("a[href^=#]:not([href=#], #menu a)").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 100;
    $("html, body").animate({scrollTop: target}, 500);
    return false;
  });
});
//満足度カウントアップ
$(function() {
  $('.count').numerator( {
    easing: 'linear', // アニメーションの動き
    duration: 3000, // アニメーションの時間
    toValue: 96, // どこまでカウントアップするか
    rounding: 0 // 小数点以下の桁数
  });
});
//もっと見るボタン
$(function() {
  $(".question_hide").hide();
  $(".more").click(function(){
    $(".question_hide").slideToggle(600);
    $(this).hide();
  });
});
//要素アニメーション
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});
