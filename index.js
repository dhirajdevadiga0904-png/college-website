let bar= document.getElementById("bar")
let nav= document.getElementById("navbar")
let close= document.getElementById("close")

if(bar)
{
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    }
    )
}
if(close)
{
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    }
    )
    
}
// Animate counters when they scroll into view
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200; // The lower, the faster

  const animateCount = (el) => {
    const target = +el.getAttribute('data-target');
    let count = 0;
    const increment = target / speed;

    const updateCount = () => {
      count += increment;
      if(count < target) {
        el.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target.toLocaleString();
      }
    };
    updateCount();
  };

  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach(counter => observer.observe(counter));
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('form-message');
  const inputs = form.querySelectorAll('input, textarea');

  // Simple validation rules
  const validators = {
    name: value => value.trim().length >= 3,
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    subject: value => value.trim().length >= 5,
    message: value => value.trim().length >= 10,
  };

  // Show error message
  function showError(input, message) {
    const errorEl = input.parentElement.querySelector('.error-message');
    errorEl.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  }

  // Clear error message
  function clearError(input) {
    const errorEl = input.parentElement.querySelector('.error-message');
    errorEl.textContent = '';
    input.removeAttribute('aria-invalid');
  }

  // Validate single input
  function validateInput(input) {
    const name = input.name;
    const value = input.value;
    if (!validators[name](value)) {
      let msg;
      switch (name) {
        case 'name': msg = 'Name must be at least 3 characters.'; break;
        case 'email': msg = 'Please enter a valid email.'; break;
        case 'subject': msg = 'Subject must be at least 5 characters.'; break;
        case 'message': msg = 'Message must be at least 10 characters.'; break;
      }
      showError(input, msg);
      return false;
    } else {
      clearError(input);
      return true;
    }
  }

  // Real-time validation on input
  inputs.forEach(input => {
    input.addEventListener('input', () => validateInput(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.className = '';

    // Validate all inputs
    let isValid = true;
    inputs.forEach(input => {
      if (!validateInput(input)) isValid = false;
    });

    if (!isValid) {
      formMessage.textContent = 'Please fix the errors above and try again.';
      formMessage.classList.add('error');
      return;
    }

    // Simulate async submission (replace with real API call)
    formMessage.textContent = 'Sending message...';
    formMessage.classList.remove('error');
    formMessage.classList.remove('success');

    setTimeout(() => {
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.classList.add('success');
      form.reset();
      inputs.forEach(input => clearError(input));
    }, 1500);
  });
});
