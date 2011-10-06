// ==UserScript==
// @name           mongo-doc
// @namespace      http://l.telenet.ru
// @description    reformat mongodb docs
// @include        http://www.mongodb.org/display/DOCS/*
// @version        0.1.0
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

var mainDb = document.querySelector("div#main-db");
mainDb.style.minWidth = "400px";
mainDb.style.width = "100%";
mainDb.style.minWidth = "600px";
mainDb.children[0].style.width = "100%";
mainDb.children[0].style.minWidth = "600px";