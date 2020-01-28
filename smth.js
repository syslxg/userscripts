// ==UserScript==
// @name         smth ads
// @namespace    https://www.newsmth.net/
// @version      0.1
// @description  try to take over the world!
// @author       lxg
// @match        https://www.newsmth.net/*
// @grant        none
// @require      https://gitcdn.xyz/repo/fuzetsu/userscripts/b38eabf72c20fa3cf7da84ecd2cefe0d4a2116be/wait-for-elements/wait-for-elements.js
// @downloadURL  https://raw.githubusercontent.com/syslxg/userscripts/master/smth.js
// ==/UserScript==

function killIt(sel) { waitForElems( { sel: sel, onmatch: a=>a.remove()})}
function killAll(sel) { waitForElems( { sel: sel, stop: false, onmatch: a=>a.remove()})}
function clickIt(sel) { waitForElems( { sel: sel, onmatch: a=>a.click()})}

if (window.self === window.top) {
    killIt('#top_head')
    killIt('#left_adv')
    killIt('div.googlead')
    killAll('#sogou_banner')
 //   clickIt('#u_login_submit')
}
