const partnerBtn = document.getElementById('partnerBtn');

function scrollToSection() {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

if (partnerBtn) {
  partnerBtn.addEventListener('click', scrollToSection);
}
