/* m3d-enhance.js — additive interaction layer for the Cataloger's Desk.
 * Does NOT touch the compiled app bundle. Adds keyboard shortcuts on top
 * of the app's existing controls (W/A/S/D look, ← → switch walls):
 *   - number keys 1..N -> jump straight to that section (clicks the nav stop).
 */
(function () {
  function ready() {
    var ui = document.getElementById("m3d-ui");
    if (!ui || !ui.querySelector(".o-stop")) return void setTimeout(ready, 200);
    // Number keys -> jump to a section (reuses the existing nav stops).
    window.addEventListener("keydown", function (e) {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
      var t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.key >= "1" && e.key <= "9") {
        var stops = ui.querySelectorAll(".o-stop");
        var i = +e.key - 1;
        if (i >= 0 && i < stops.length) {
          stops[i].click();
          e.preventDefault();
        }
      }
    });
  }
  ready();
})();
