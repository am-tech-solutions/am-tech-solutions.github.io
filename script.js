// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form: submit via fetch so we can show an inline status message
const form = document.querySelector('.contact-form');
if (form) {
  const note = form.querySelector('.form-note');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = form.access_key.value;
    if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      note.textContent = 'Form not yet configured — see README.md to add your free Web3Forms access key.';
      return;
    }
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    note.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        note.textContent = "Thanks — message sent. We'll get back to you soon.";
        form.reset();
      } else {
        note.textContent = 'Something went wrong. Please email amtechsolutionspvtltd@gmail.com instead.';
      }
    } catch (err) {
      note.textContent = 'Network error. Please email amtechsolutionspvtltd@gmail.com instead.';
    } finally {
      submitBtn.disabled = false;
    }
  });
}
