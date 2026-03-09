/**
 * Smooth page transitions for 둘러앉아 game collection.
 *
 * - Pages automatically enter with a subtle fade + slide-up animation
 *   (driven by transitions.css).
 * - In-app link clicks (same-origin .html pages) trigger a brief
 *   fade + slide-up exit animation before the browser navigates.
 *
 * No frameworks — pure vanilla JS, < 30 lines.
 */
(function () {
  'use strict';

  /** Delay (ms) must match the pageExit animation duration in transitions.css */
  var EXIT_DURATION = 220;

  document.addEventListener('click', function (e) {
    /* Walk up the DOM to find the nearest <a> element */
    var el = e.target;
    while (el && el.tagName !== 'A') el = el.parentElement;
    if (!el) return;

    var href = el.getAttribute('href');
    if (!href) return;

    /* Skip external, hash, special-protocol, and new-tab links */
    if (
      href.charAt(0) === '#' ||
      href.indexOf('://') !== -1 ||
      href.indexOf('//') === 0 ||
      href.indexOf('mailto:') === 0 ||
      href.indexOf('tel:') === 0 ||
      href.indexOf('javascript:') === 0
    ) return;

    /* Skip links that open in a new tab/window */
    if (el.target && el.target !== '' && el.target !== '_self') return;

    /* If any modifier key is held (open in new tab, etc.), skip */
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

    /* Trigger exit animation, then navigate */
    e.preventDefault();
    document.body.classList.add('is-leaving');

    var destination = href;
    setTimeout(function () {
      window.location.href = destination;
    }, EXIT_DURATION);
  });
})();
