// ==UserScript==
// @name        github-close-pr-danger
// @namespace   anton0xf
// @description mark "Close and comment" PR button as "danger"
// @include     https://github.com/*/pull/*
// @include     https://github.yandex-team.ru/*/pull/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  var closePrBtns = Array.from(document.getElementsByClassName('js-comment-and-button'));
  closePrBtns.map((btn) => btn.classList.add('btn-danger'));
})();