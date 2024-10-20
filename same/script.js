document.addEventListener('DOMContentLoaded', async () => {
  try {
    await Promise.all([loadHeader(), loadFooter()]);
  } catch (err) {
    console.error('Error loading components:', err);
  }
});

async function loadHeader() {
  try {
    const response = await fetch('./header.html');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.text();
    document.body.insertAdjacentHTML('afterbegin', data);
  } catch (err) {
    console.error('Error loading header:', err);
  }
}

async function loadFooter() {
  try {
    const response = await fetch('./footer.html');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.text();
    document.body.insertAdjacentHTML('beforeend', data);
  } catch (err) {
    console.error('Error loading footer:', err);
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
}
