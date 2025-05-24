const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const resetBtn = document.getElementById('reset-btn');

// Load saved checkbox states from localStorage
checkboxes.forEach((checkbox, index) => {
  const savedState = localStorage.getItem(`checkbox${index}`);
  if (savedState === 'true') {
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', () => {
    localStorage.setItem(`checkbox${index}`, checkbox.checked);
  });
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
  checkboxes.forEach((checkbox, index) => {
    checkbox.checked = false;
    localStorage.setItem(`checkbox${index}`, false);
  });

  // Sparkle glow animation
  resetBtn.classList.add('clicked');
  setTimeout(() => {
    resetBtn.classList.remove('clicked');
  }, 300);
});
