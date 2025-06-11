// Simple initialization script for basic effects
document.addEventListener('DOMContentLoaded', function() {
  // Add basic hover effects to service boxes
  document.querySelectorAll('.services-1').forEach(element => {
    element.classList.add('scale-up');
  });
  
  // Add glow effect to buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.add('glow-effect');
  });
  
  // Add rotate effect to icons
  document.querySelectorAll('.icon').forEach(icon => {
    icon.classList.add('rotate-icon');
  });
});