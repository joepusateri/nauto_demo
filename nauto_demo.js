// ==UserScript==
// @name         Demo
// @namespace    http://tampermonkey.net/
// @version      2025-06-30
// @description  try to take over the world!
// @author       Joe Pusateri
// @match        https://mydashboard.nauto.com/*
// @match        https://fleet-canary.nauto.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @sandbox JavaScript
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nauto.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  console.log("Demo namechange started")

  waitForKeyElements("div", zapHiddenReplies, true);

  function zapHiddenReplies(jNode) {
    const tester = jNode.text().match(/^JoeP's Fleet$/);
    if (tester) {
        var classname = jNode.attr("class").split(" ")[3];
        var indicator = (classname == "fdHtsR" ? "↑" : "↓");
        jNode.text("Demo:"+indicator+classname);
        console.log(classname);
        return;
    }//fdHtsR

    if (jNode.attr("class") && jNode.attr("class").match(/fdHtsR/))
    {
      const oldText = jNode.text();
      //console.log("jNode:"+(jNode.text().match(/Superfleet$/)));
      jNode.text("Demo");
      if (oldText.match(/Superfleet$/))
      {
        jNode.text("Superfleet Demo");
      }
    }
    if (jNode.attr("class") && jNode.attr("class").match(/blBXsG/))
    {
      const oldText = jNode.text();
      //console.log("Avg:"+(jNode.text()));
      const matches = jNode.text().match(/.*average: (.*)/);
      //console.log("avg:"+matches);
      if (matches != null && matches.length > 1) {
          jNode.text("Demo average: " + matches[1]);
          return false;
      }
    }
    return true;
  }

})();
