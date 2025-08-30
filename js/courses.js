// ===== Courses Page JS Using Utils.js =====
document.addEventListener('DOMContentLoaded', () => {
  const coursesSection = document.querySelector('.courses');
  if (!coursesSection) return;

  // Create Search Input
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search courses...');
  searchInput.classList.add('course-search');
  coursesSection.insertBefore(searchInput, coursesSection.firstChild);

  const courseCards = document.querySelectorAll('.course-card');

  // ===== Filter Courses with Debounce =====
  searchInput.addEventListener('input', Utils.debounce((e) => {
    const query = e.target.value.toLowerCase();
    courseCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(query) ? 'block' : 'none';
    });
  }, 300));

  // Hover Animation (unchanged)
  courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
});
