/* ===================================================================
   RALJE ATELIER — Theme JavaScript
   Scroll reveals + mobile navigation
   =================================================================== */

(function () {
  'use strict';

  /* --- Scroll Reveal --- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* --- Mobile Navigation Toggle --- */
  function initMobileNav() {
    var toggle = document.querySelector('.site-header__toggle');
    var nav = document.querySelector('.site-header__nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });

    // Close nav when a link is clicked
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
      });
    });
  }

  /* --- Header background on scroll --- */
  function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.style.background = 'rgba(11, 8, 16, 0.95)';
      } else {
        header.style.background = 'var(--ink)';
      }
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initMobileNav();
    initHeaderScroll();
  });
})();
