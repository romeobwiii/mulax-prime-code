// ===== Form Validation Using Utils.js =====
document.addEventListener('DOMContentLoaded', () => {
  // Signup Form Validation
  const signupForm = document.querySelector('.signup-form-card form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      const name = signupForm.name.value.trim();
      const email = signupForm.email.value.trim();
      const password = signupForm.password.value.trim();
      const confirmPassword = signupForm.confirm_password.value.trim();

      if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        e.preventDefault();
        return;
      }

      if (!Utils.isValidEmail(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        e.preventDefault();
        return;
      }
    });
  }

  // Login Form Validation
  const loginForm = document.querySelector('.login-form-card form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      const email = loginForm.email.value.trim();
      const password = loginForm.password.value.trim();

      if (!email || !password) {
        alert('Please fill in all fields.');
        e.preventDefault();
        return;
      }

      if (!Utils.isValidEmail(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
      }
    });
  }
});
