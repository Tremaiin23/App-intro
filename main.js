// Add subtle animation on page load
document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    setTimeout(() => {
      feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      feature.style.opacity = '1';
      feature.style.transform = 'translateY(0)';
    }, 100 * index);
  });
});