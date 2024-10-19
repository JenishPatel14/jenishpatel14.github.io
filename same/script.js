document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});

function loadHeader() {
  fetch('./header.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
    })
    .catch(err => console.error('Error loading header:', err));
}

function loadFooter() {
  fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(err => console.error('Error loading footer:', err));
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    }
