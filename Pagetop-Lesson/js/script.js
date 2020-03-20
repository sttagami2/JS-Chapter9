$(function() {

  // #back内の<a>タグがクリックされた時の処理
  $('#back a').on('click',function(){

    // animate()はアニメーション効果を設定するjQueryの関数
    $('body, html').animate({
      scrollTop:0
    },800);
    return false;
  })
})