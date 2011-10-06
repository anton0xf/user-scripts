// ==UserScript==
// @name           razdrazhe
// @namespace      http://l.telenet.ru
// @description    решает капчу
// @include        http://razdrazhe.ru/komiks-327
// ==/UserScript==

(function(){
	var question = document.querySelector('form[action="/mnenie"]').children[6].textContent;
	var captures = question.match(/.*: (\d{4}) +(\d{2})/);
	var answer = parseInt(captures[1])+parseInt(captures[2]);
	document.querySelector('input#bot').setAttribute('value', answer);
})();