// English pages only: a browser set to Ukrainian or Russian is offered those
// versions of the same page. Never a redirect — search engines and App Review
// keep seeing the English page as it is.
(function () {
  var hint = document.getElementById('lang-hint');
  if (!hint) return;
  try { if (localStorage.getItem('deutli.langHint') === 'off') return; } catch (e) {}
  var first = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
  if (first.indexOf('uk') !== 0 && first.indexOf('ru') !== 0) return;
  hint.hidden = false;
  hint.querySelector('button').addEventListener('click', function () {
    hint.hidden = true;
    try { localStorage.setItem('deutli.langHint', 'off'); } catch (e) {}
  });
})();
