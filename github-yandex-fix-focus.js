// ==UserScript==
// @name        github-yandex-fix-focus
// @namespace   anton0xf
// @description mark "Reset focus on pages"
// @include     https://github.yandex-team.ru/*
// @version     2
// @grant       none
// ==/UserScript==

window.onload(function(){
    document.activeElement.blur();
});
