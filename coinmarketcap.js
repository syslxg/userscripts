// ==UserScript==
// @name         coinmarketcap ads
// @namespace    https://github.com/syslxg
// @version      0.1
// @description  try to take over the world!
// @author       lxg
// @match        *://*.coinmarketcap.com/*
// @grant        none
// @require      https://gitcdn.xyz/repo/fuzetsu/userscripts/b38eabf72c20fa3cf7da84ecd2cefe0d4a2116be/wait-for-elements/wait-for-elements.js
// @downloadURL  https://raw.githubusercontent.com/syslxg/userscripts/master/coinmarketcap.js
// ==/UserScript==

function killIt(sel) { waitForElems( { sel: sel, onmatch: a=>a.remove()})}

if (window.self === window.top) {
    killIt('#ad-slot--header-banner')
    killIt('#ad-slot--leaderboard-top')
    killIt('.cmc-main-section__sidebar')
    killIt('#ad-slot--leaderboard-side')
    killIt('.cmc-sidebar-ad')
    killIt('#cmc-cookie-policy-banner')
    killIt('#ad-slot--leaderboard-bottom')
}
