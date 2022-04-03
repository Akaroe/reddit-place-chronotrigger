// ==UserScript==
// @name         Reddit Place - chronotrigger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @icon         https://media.discordapp.net/attachments/297880074877927435/960255679971594240/unknown.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/Akaroe/reddit-place-chronotrigger/blob/master/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())
 
    }, false);
 
}
