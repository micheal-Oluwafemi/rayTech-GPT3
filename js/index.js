const toggleBtn = document.getElementById('menu-btn');
const toggleContent = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  toggleContent.classList.toggle('hidden');
  toggleContent.classList.toggle('flex');
});
