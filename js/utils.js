// ===== Utils.js: Reusable Utility Functions =====
const Utils = (() => {
  // ===== Debounce Function =====
  // Prevents a function from running too frequently
  const debounce = (func, delay = 300) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // ===== Throttle Function =====
  // Limits how often a function can run
  const throttle = (func, limit = 300) => {
    let lastFunc;
    let lastRan;
    return (...args) => {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  // ===== Smooth Scroll to Element =====
  const scrollToElement = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ===== Validate Email =====
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // ===== Toggle Class =====
  const toggleClass = (el, className) => {
    if (el) el.classList.toggle(className);
  };

  // Export functions
  return {
    debounce,
    throttle,
    scrollToElement,
    isValidEmail,
    toggleClass
  };
})();
