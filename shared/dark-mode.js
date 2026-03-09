/**
 * dark-mode.js — Shared dark mode toggle logic
 *
 * Usage:
 *   <script src="../shared/dark-mode.js"></script>
 *
 * This script:
 *  1. Reads saved preference from localStorage('theme')
 *  2. Falls back to system prefers-color-scheme
 *  3. Exposes initTheme(), toggleTheme(), updateThemeIcons()
 *  4. Auto-initialises on DOMContentLoaded if not already called
 *
 * HTML toggle button:
 *   <button class="btn-theme-toggle" onclick="toggleTheme()" aria-label="다크 모드 전환"></button>
 */

(function () {
  /**
   * Apply stored or system-preferred theme to <html data-theme="...">
   */
  function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    updateThemeIcons();
  }

  /**
   * Toggle between dark / light and persist to localStorage.
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcons();
  }

  /**
   * Sync all .btn-theme-toggle buttons with the current theme.
   */
  function updateThemeIcons() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.btn-theme-toggle').forEach(function (btn) {
      btn.textContent = isDark ? '☀️' : '🌙';
      btn.title = isDark ? '라이트 모드로 전환' : '다크 모드로 전환';
      btn.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
    });
  }

  /**
   * Listen for OS-level theme changes (e.g. auto mode) while the page is open,
   * but only if no explicit user preference is stored.
   */
  function watchSystemTheme() {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', function (e) {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateThemeIcons();
      }
    });
  }

  // ── Expose to global scope so onclick="toggleTheme()" works ─────
  window.initTheme = initTheme;
  window.toggleTheme = toggleTheme;
  window.updateThemeIcons = updateThemeIcons;

  // ── Auto-init as early as possible to avoid flash of wrong theme ─
  // Run immediately (script is deferred or at end of body)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initTheme();
      watchSystemTheme();
    });
  } else {
    initTheme();
    watchSystemTheme();
  }
})();
