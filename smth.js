// ==UserScript==
// @name         smth ads
// @namespace    https://www.newsmth.net/
// @version      0.1
// @description  try to take over the world!
// @author       lxg
// @match        https://www.newsmth.net/*
// @grant        none
// @require      https://gitcdn.xyz/repo/fuzetsu/userscripts/b38eabf72c20fa3cf7da84ecd2cefe0d4a2116be/wait-for-elements/wait-for-elements.js
// @downloadURL 
// ==/UserScript==

function killIt(sel) { waitForElems( { sel: sel, onmatch: a=>a.remove()})}

if (window.self === window.top) {
  //  waitForElems({sel: '#top_head', onmatch: a=>a.remove()})
  //  waitForElems({sel: ' #left_adv', onmatch: a=>a.remove()})
    killIt('#top_head')
    killIt('#left_adv')
}
